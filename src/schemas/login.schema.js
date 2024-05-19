import { z } from 'zod'
export const loginSchema = z.object({
    taiKhoan: z.string({ required_error: 'Vui lòng nhập tài khoản' }).min(1),
    matKhau: z.string({ required_error: 'Vui lòng nhập mật khẩu' }).min(1)

})