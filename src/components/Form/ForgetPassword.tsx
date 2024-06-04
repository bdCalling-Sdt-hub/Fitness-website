import { SubmitHandler, useForm } from "react-hook-form"
import { useAppDispatch } from "../../Store/hook"
import { ForgetPass } from "../../States/Authentication/ForgatePasswordSlice"

interface Inputs {
    email: string | null,
}
interface ChildPops {
    setOpenForgetPass: (arg0: boolean) => void
    setOpenVerifyPass: (arg0: boolean) => void
}
const ForgetPassword = ({ setOpenForgetPass, setOpenVerifyPass }: ChildPops): React.JSX.Element => {
    const dispatch = useAppDispatch()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = (data) => {
        dispatch(ForgetPass({ email: data.email }))
            .then(response => {
                if (response?.payload?.success && data.email) {
                    localStorage.setItem('resetEmail', data.email)
                    setOpenForgetPass(false)
                    setOpenVerifyPass(true)
                }
            })
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="bg-white w-full px-1 md:px-5 py-6 text-center">
            <h3 className="text-[#262727] font-bold text-lg md:text-2xl lg:text-4xl">Forgot Password</h3>
            <p className="text-left text-[#575757]">Email</p>
            <input placeholder="Asadujjaman@gmail.com" className="w-full text-[#959595] border p-3 outline-none rounded-md my-2" {...register("email", { required: true })} />
            {errors.email && <p className="text-red-600 text-left">Email is required</p>}
            <div className="w-full flex justify-between items-center">
            </div>
            <input onClick={() => {
                // setOpenForgetPass(false)
                // setOpenVerifyPass(true)
            }} value={`Send Code`} className="text-[#FCFCFC] bg-[#B47000] px-8 py-3 mt-5 cursor-pointer" type="submit" />
        </form>
    )
}

export default ForgetPassword
