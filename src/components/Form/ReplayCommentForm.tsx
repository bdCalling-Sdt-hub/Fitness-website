import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
type Inputs = {
  replay: string,
};
const ReplayCommentForm = ({ user }: any): React.JSX.Element => {
  const { register, handleSubmit, watch, formState: { errors }, reset } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = data => { }
  return (
    <>
      <div className='flex justify-start items-start gap-3 mt-4'>
        <img className='w-10 h-10 rounded-full' src={`https://i.ibb.co/H2TQY14/2304226.png`} alt="" />
        <form className='w-full' onSubmit={handleSubmit(onSubmit)}>
          <div className='w-full text-end'>
            <p className='text-start mb-1'>{user?.email}</p>
            <textarea className='w-full h-32 border resize-none outline-none p-2' {...register("replay", { required: true })}>
            </textarea>
            {errors.replay && <p className='text-red-500 text-start'>This field is required*</p>}
            <button className='border border-[#B47000] p-1 px-4 text-[#B47000] '>send Replay </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default ReplayCommentForm
