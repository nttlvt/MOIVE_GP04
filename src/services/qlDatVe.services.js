import axios from 'axios'
import { TOKEN } from '../constant/localStorage'
import { ThongTinDatVe } from '../store/QuanLyDatVe/ThongTinDatVe'

export const qlDatVeService = {
    layChiTietPhongVe: (maLichChieu) =>
        axios.get(`https://movienew.cybersoft.edu.vn/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`, {
            headers: {
                TokenCybersoft: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA2MyIsIkhldEhhblN0cmluZyI6IjA5LzA5LzIwMjUiLCJIZXRIYW5UaW1lIjoiMTcyNTg0MDAwMDAwMDAiLCJuYmYiOjE2OTY4NzA4MDAsImV4cCI6MTcyNTk4NzYwMH0.a30YDpRRs8DiVygvNfzGZr-a9fge4_6hBAu8wYOBE4o'
            }
        }),
    datVe: (thongTinDatVe = new ThongTinDatVe()) =>
        axios.post(`https://movienew.cybersoft.edu.vn/api/QuanLyDatVe/DatVe`, thongTinDatVe, {
            headers: {
                TokenCybersoft: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA2MyIsIkhldEhhblN0cmluZyI6IjA5LzA5LzIwMjUiLCJIZXRIYW5UaW1lIjoiMTcyNTg0MDAwMDAwMDAiLCJuYmYiOjE2OTY4NzA4MDAsImV4cCI6MTcyNTk4NzYwMH0.a30YDpRRs8DiVygvNfzGZr-a9fge4_6hBAu8wYOBE4o',
                'Authorization': 'Bearer ' +  localStorage.getItem(TOKEN),    
            }
        }),
}