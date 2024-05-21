import { Button, Divider } from 'antd'
import React from 'react'

export const Footer = () => {
  return (
    <div>
        <div className="footer__content">
            <div className="container">
              <div className="grid grid-cols-12">
                <div className="col-span-4 flex flex-col gap-5">
                  <a className="logo" href="/">
                      <img width={165} height={130} src="https://cinestar.com.vn/_next/image/?url=%2Fassets%2Fimages%2Fheader-logo.png&w=1920&q=75" alt="" />
                  </a>
                  <h1 className='text-white text-[16px]'>BE HAPPY, BE A START</h1>
                  <div className="footer__order flex mt-5 gap-3">
                    <Button className='justify-center flex font-bold' style={{backgroundColor: '#F3EA28', border: 'none', height: '40px', width: '183px', lineHeight: '32px'}} >
                        <a className=''>ĐẶT VÉ</a>
                    </Button>
                    <Button className='justify-center flex ml-2 font-bold !border-yellow-500' style={{backgroundColor: '#663399', height: '40px', width: '183px', lineHeight: '32px', color: 'yellow'}}>
                        <a className=''>ĐẶT BẮP NƯỚC</a>
                    </Button>
                  </div>
                  <div className="footer__icon flex gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" height="22" width="22" viewBox="0 0 512 512"><path fill='white' d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z" /></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" height="22" width="22" viewBox="0 0 576 512"><path fill='white' d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" /></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" height="22" width="22" viewBox="0 0 448 512"><path fill='white' d="M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z" /></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" height="22" width="22" viewBox="0 0 512 512"><path fill='white' d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" /></svg>
                  </div>
                  <div className="footer__leaguage flex gap-4 text-white">
                    <p className='text-[16px]'>Ngôn ngữ</p>
                    <div className='flex gap-2'>
                      <img src="https://cinestar.com.vn/assets/images/footer-vietnam.svg" style={{width: '24px', height: '24px'}} alt="" />
                      <span className='flex gap-2'>
                          <p className='mt-[2px] text-[16px]'>VN</p>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-span-8">
                  <div className="grid grid-cols-12">
                    <div className="col-span-3 flex flex-col gap-5 text-white text-[16px]">
                      <h1 className=''>TÀI KHOẢN</h1>
                      <div className="text-content flex flex-col gap-4">
                        <a href="">Đăng nhập</a>
                        <a href="">Đăng ký</a>
                        <a href="">Membership</a>
                      </div>
                    </div>

                    <div className="col-span-3 flex flex-col gap-5 text-white text-[16px]">
                      <h1 className='text-[16px]'>THUÊ SỰ KIỆN</h1>
                        <a href="">Thuê rạp</a>
                        <a href="">Các loại hình cho thuê</a>
                    </div>

                    <div className="col-span-3 flex flex-col gap-5 text-white text-[16px]">
                      <h1 className='text-[16px]'>DỊCH VỤ KHÁC</h1>
                        <a href="">Nhà Hàng</a>
                        <a href="">Kidzone</a>
                        <a href="">Bowling</a>
                        <a href="">Biliards</a>
                        <a href="">Gym</a>
                        <a href="">Nhà hát Opera</a>
                        <a href="">Coffee</a>
                    </div>

                    <div className="col-span-3 flex flex-col gap-5 text-white text-[16px]">
                      <h1 className='text-[16px]'>HỆ THỐNG RẠP</h1>
                        <a href="">Cinestar Kiên Giang</a>
                        <a href="">Cinestar HCM</a>
                        <a href="">Cinestar Đà Lạt</a>
                        <a href="">Cinestar Bình Dương</a>
                    </div>

                    <div className="col-span-3 flex flex-col gap-5 text-white text-[16px] mt-[40px]">
                      <h1 className='text-[16px]'>XEM PHIM</h1>
                        <a href="">Phim đang chiếu</a>
                        <a href="">Phim sắp chiếu</a>
                        <a href="">Suất chiếu đặc biệt</a>
                    </div>

                    <div className="col-span-3 flex flex-col gap-5 text-white text-[16px] mt-[40px]">
                      <h1 className='text-[16px]'>CINESTAR</h1>
                      <a href="">Giới thiệu</a>
                      <a href="">Liên hệ</a>
                      <a href="">Tuyển dụng</a>
                    </div>
                  </div>
                </div>
              </div>
              <Divider style={{ height: '4px' }}/>
              <div className="footer__bottom flex justify-between text-white text-[16px]">
            <div>
              <div className="footer-bottom-left">© 2023 Cinestar. All rights reserved.</div>
              <ul className="menu-list flex gap-5 mr-[100px]">
                <li className="menu-item"><a className="menu-link" href="/chinh-sach-bao-mat">Chính sách bảo mật</a></li>
                <li className="menu-item"><a className="menu-link" href="/news">Tin điện ảnh</a></li>
                <li className="menu-item"><a className="menu-link" href="/faqs">Hỏi và đáp</a></li>
              </ul>
            </div>

          </div>
          <div className="ft-author-content" style={{ fontSize: '10px' }}>
                <ul className='text-white text-center mt-[60px]'>
                  <li>
                    CÔNG TY CỔ PHẦN GIẢI TRÍ PHÁT HÀNH PHIM – RẠP CHIẾU PHIM NGÔI SAO
                    <br />
                    ĐỊA CHỈ: 135 HAI BÀ TRƯNG, PHƯỜNG BẾN NGHÉ, QUẬN 1, TP.HCM
                  </li>
                  <li>
                    GIẤY CNĐKDN SỐ: 0312742744, ĐĂNG KÝ LẦN ĐẦU NGÀY 18/04/2014, ĐĂNG KÝ THAY ĐỔI LẦN THỨ 2 NGÀY 15/09/2014, CẤP BỞI SỞ KH&amp;ĐT TP.HCM
                  </li>
                </ul>
              </div>
            </div>
        </div>
    </div>
  )
}
