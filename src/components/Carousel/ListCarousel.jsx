import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
export const ListCarousel = () => {
    const product = data
    return ( 
        <div className=" w-[70%] m-auto ">
            {/* <h2 className='text-center text-white text-4xl'>iPhone</h2> */}
                <Swiper
                
                    navigation={true}
            
                slidesPerView={4}
                spaceBetween={30}
                // autoplay={{
                //     delay: 5500,
                //     disableOnInteraction: false,
                // }}
                modules={[Navigation, Autoplay, Pagination]}
                className="mySwiper p-10 "
            >
                {
                   
                }


            </Swiper>

        </div >

    )
}
