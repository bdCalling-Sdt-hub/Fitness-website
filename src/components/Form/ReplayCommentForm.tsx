import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import { useAppDispatch } from '../../Store/hook';
import { AddReplay } from '../../States/Comments/AddReplaySlice';
import { GetAllComment } from '../../States/Comments/GetAllCommentSlice';
import Swal from 'sweetalert2';
import { ServerUrl } from '../../AxiosConfig/Config';
type Inputs = {
  replay: string,
};
const ReplayCommentForm = ({ user, setreplay, replay, id,classId ,limit }: any): React.JSX.Element => {
  const dispatch = useAppDispatch()
  const { register, handleSubmit, watch, formState: { errors }, reset } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = data => {
    dispatch(AddReplay({ reply: data.replay, commentId: id })).then((res) => {
      if (res.type =='AddReplay/fulfilled') {
        dispatch(GetAllComment({ classId: classId ,limit:limit}))
        setreplay({ ...replay, open: false })
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your comment has been sent",
          showConfirmButton: false,
          timer: 1500
      });
      }
    })
  }
  return (
    <>
      <div className='flex justify-start items-start gap-3 mt-4'>
        <img className='w-10 h-10 rounded-full' src={user.profile_image.includes('http') ? 'https://i.ibb.co/H2TQY14/2304226.png' : `${ServerUrl}/${user.profile_image}`} alt="" />
        {/* <img className='w-10 h-10 rounded-full' src={'https://i.ibb.co/H2TQY14/2304226.png'} alt="" /> */}
        <form className='w-full' onSubmit={handleSubmit(onSubmit)}>
          <div className='w-full text-end'>
            <p className='text-start mb-1'>{user?.email}</p>
            <textarea className='w-full h-32 border resize-none outline-none p-2' {...register("replay", { required: true })}>
            </textarea>
            {errors.replay && <p className='text-red-500 text-start'>This field is required*</p>}
            <button type='button' onClick={() => {
              setreplay({ ...replay, open: false })
            }} className='border border-[red] p-1 px-4 text-[red] '>cancel </button>
            <button className='border border-[#B47000] p-1 px-4 text-[#B47000] ml-4'>send Replay </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default ReplayCommentForm
