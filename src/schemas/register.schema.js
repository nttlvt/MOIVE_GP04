import { z } from "zod";

export const registerSchema = z.object({
    hoTen: z.string({ required_error: 'Vui lòng nhập Họ tên' })
        .min(1)
        .max(50, 'Họ tên chỉ tối đa 50 ký tự'),// bắt buộc phải nhập
    taiKhoan: z.string({ required_error: 'Vui lòng nhập tài khoản' })
        .min(1)
        .max(16,'Tài khoản tối đa 16 ký tự'),
    matKhau: z.string({ required_error: 'Vui lòng nhập mật khẩu' })
        .min(8, 'Mật khẩu phải từ 8 ký tự'),
    email: z.string({ required_error: 'Vui lòng nhập email' })
        .email('Vui lòng nhập đúng định dạng'),
    soDt: z.string({ required_error: 'Vui lòng nhập số điện thoại' })
        .min(10,'Số điện thoại 10 ký tự ')
        .max(10, "Số điện thoại tối đa 10 ký tự"),
    maNhom:z.string({required_error:'Vui lòng nhập mã nhóm'}).min(1)
    
})

