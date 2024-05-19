import React from 'react'
import { registerSchema } from '../../schemas/register.schema'
import { Button, Input } from 'antd'
import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, useForm } from 'react-hook-form'
import { qlNguoiDungServices } from '../../services/qlNguoiDung.services'
import { useNavigate } from 'react-router-dom'
import { PATH } from '../../constant/config'
import { toast, ToastContainer } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux'
import 'react-toastify/dist/ReactToastify.css';
import { quanLyNguoiDungActionsThunks } from '../../store/NguoiDung'
export const RegisterTemplate = () => {
    const navigate = useNavigate()
    const { isFetchingRegister } = useSelector((state) => state.quanLyNguoiDung)
    console.log('isFetchingRegister',isFetchingRegister)
    const { handleSubmit, control, formState: { errors } } = useForm({
        resolver: zodResolver(registerSchema)
    })
    console.log(errors)
    // const onSubmit = async (values) => {
    //     try {
    //         console.log(values)
    //         await qlNguoiDungServices.dangKy(values)
    //         toast.success('Đăng ký tài khoản thành công!')
    //         navigate(PATH.dangnhap)
    //     }
    //     catch (err) {
    //         toast.error(error?.response.data?.content)
    //         console.log(err)
    //     }
    // }
    const dispatch = useDispatch();
    const onSubmit = (values) => {
        //c1 
        // dispatch(quanLyNguoiDungActionsThunks.registerThunk(123) as unknown as UnknownAction)
        //c2 
        dispatch(quanLyNguoiDungActionsThunks.registerThunk(values))
            .unwrap()
            .then(() => {
                //action thành công
                toast.success('Đăng ký tài khoản thành công!')
                navigate(PATH.dangnhap)
           

            })
            .catch((error) => {
                toast.error(error?.response.data?.content)

            })

    }
    return (
        <div >
            <div className="flex items-center justify-center min-h-screen">
                <div className="relative flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0">
                    <form className="flex flex-col justify-center p-8 md:p-14" onSubmit={handleSubmit(onSubmit)}>
                        <span className="mb-1 text-4xl font-bold">ĐĂNG KÝ</span>
                        <div className="py-2">
                            <span className="mb-2 text-md">Họ tên</span>
                            <Controller
                                control={control}
                                name='hoTen'
                                render={({ field }) => <Input {...field} type="text" className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500" placeholder='Họ tên' />}
                            />
                            {errors.hoTen && <p className="text-red-600 mt-2 text-[12px]">{errors.hoTen?.message}</p>}
                        </div>
                        <div className="py-2">
                            <span className="mb-2 text-md">Tài khoản</span>
                            <Controller
                                control={control}
                                name='taiKhoan'
                                render={({ field }) => <Input {...field} type="text" className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500" placeholder='Tài khoản' />}
                            />
                            {errors.taiKhoan && <p className="text-red-600 mt-2 text-[12px]">{errors.taiKhoan?.message}</p>}
                        </div>
                        <div className="py-2">
                            <span className="mb-2 text-md">Mật khẩu</span>
                            <Controller
                                control={control}
                                name='matKhau'
                                render={({ field }) => <Input.Password {...field} className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500" placeholder='Mật khẩu' />}
                            />
                            {errors.matKhau && <p className="text-red-600 mt-2 text-[12px]">{errors.matKhau?.message}</p>}
                        </div>
                        <div className="py-2">
                            <span className="mb-2 text-md">Emali</span>
                            <Controller
                                control={control}
                                name='email'
                                render={({ field }) => <Input {...field} className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500" placeholder='Email' />}
                            />
                            {errors.email && <p className="text-red-600 mt-2 text-[12px]">{errors.email?.message}</p>}
                        </div>
                        <div className="py-2">
                            <span className="mb-2 text-md">Mã nhóm</span>
                            <Controller
                                control={control}
                                name='maNhom'
                                render={({ field }) => <Input {...field} className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500" placeholder='Mã nhóm' />}
                            />
                            {errors.maNhom && <p className="text-red-600 mt-2 text-[12px]">{errors.maNhom?.message}</p>}
                        </div>
                        <div className="py-2">
                            <span className="mb-2 text-md">Số điện thoại</span>
                            <Controller
                                control={control}
                                name='soDt'
                                render={({ field }) => <Input {...field} className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500" placeholder='Số điện thoại' />}
                            />
                            {errors.soDt && <p className="text-red-600 mt-2 text-[12px]">{errors.soDt?.message}</p>}
                        </div>
                        <Button type='primary' htmlType='submit' className="w-full mb-2" loading={isFetchingRegister}>Đăng ký</Button>

                        <div className="text-center">
                            Bạn đã có tài khoản?

                            <button className="ml-3 mb-2 bg-slate-300 p-2 rounded-md" onClick={() => navigate(PATH.dangnhap)}>Đăng nhập</button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    )
}
