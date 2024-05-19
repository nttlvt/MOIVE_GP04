import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useGetPhimList } from '../../hooks/api';
import { Button } from 'antd';
export const ListCarousel = () => {
    const { data } = useGetPhimList()
    return (
        <div className="my-5 m-auto w-[80%] ">
            <Swiper
                navigation={true}
                slidesPerView={4}
                spaceBetween={30}
                // autoplay={{
                //     delay: 5500,
                //     disableOnInteraction: false,
                // }}
                modules={[Navigation, Autoplay, Pagination]}
                className='w-full'
            >
                {
                    data && data.map((value) => {
                        return <SwiperSlide className='card' key={value.id}>
                            <img className=' h-[400px]' src={value.hinhAnh} alt="" />
                            <p className='text-[20px] text-white mt-3'>{value.tenPhim}</p>
                            <div className='flex justify-between'> 
                            <Button>Xem trailer</Button>
                            <Button >Đặt vé</Button>
                            </div>
                        </SwiperSlide>
                    })
                }
            </Swiper>
        </div>
    )
}
