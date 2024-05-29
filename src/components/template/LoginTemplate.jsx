import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { loginSchema } from '../../schemas/login.schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button, Input } from 'antd'
import { Navigate, useNavigate } from 'react-router-dom'
import { PATH } from '../../constant/config'
import { useDispatch ,useSelector} from 'react-redux'
import { quanLyNguoiDungActions } from '../../store/NguoiDung/slice'
import { quanLyNguoiDungActionsThunks } from '../../store/NguoiDung'
import { toast, ToastContainer } from 'react-toastify'
export const LoginTemplate = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { isFetchingLogin , userLogin} = useSelector((state) => state.quanLyNguoiDung)
    const { handleSubmit, control, formState: { errors } } = useForm({
        resolver: zodResolver(loginSchema)
    })
    console.log(errors)
    const onSubmit = (values) => {
        console.log(values)
        dispatch(quanLyNguoiDungActionsThunks.loginThunk(values))
        .unwrap()
        .then(() => {
            //action thành công
            toast.success('Đăng nhập tài khoản thành công!')
            navigate('/')
            // navigate(PATH.dangNhap)

        })
        .catch((error) => {
            toast.error(error?.response.data?.content)

        })
    }
    if (userLogin) {
        return <Navigate to ='/'/>
    }
    return (
        <div>
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="relative flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0">
                    <form className="flex flex-col justify-center p-8 md:p-14" onSubmit={handleSubmit(onSubmit)}>
                        <span className="mb-3 text-4xl font-bold">ĐĂNG NHẬP</span>
                        <div className="py-4">
                            <span className="mb-2 text-md">Tài khoản </span>
                            <Controller
                                control={control}
                                name='taiKhoan'
                                render={({ field }) => <Input {...field} type="text" className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500" placeholder='Tài khoản' />}
                            />
                            {errors.taiKhoan && <p className="text-red-600 mt-2 text-[12px]">{errors.taiKhoan?.message}</p>}
                        </div>
                        <div className="py-4">
                            <span className="mb-2 text-md">Mật khẩu</span>
                            <Controller
                                control={control}
                                name='matKhau'
                                render={({ field }) => <Input.Password {...field} className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500" placeholder='Mật khẩu' />}
                            />
                            {errors.matKhau && <p className="text-red-600 mt-2 text-[12px]">{errors.matKhau?.message}</p>}


                        </div>
                        <Button type='primary' htmlType='submit' className="w-full mb-2" loading={isFetchingLogin}>Đăng nhập</Button>

                        <div className="text-center">
                            Bạn chưa có tài khoản?

                            <button type='primary' className="ml-3 mb-2 bg-slate-300 p-2 rounded-md" onClick={() => navigate(PATH.dangky)}>Đăng ký</button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    )
}
