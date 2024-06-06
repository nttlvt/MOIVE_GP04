import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import axios from "axios";

export const Banner = () => {
  const [banner, setBanner] = useState([]);

  const bannerAPI = async () => {
    try {
      const response = await axios.get(
        'https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachBanner',
        {
          headers: {
            TokenCybersoft: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA2MyIsIkhldEhhblN0cmluZyI6IjA5LzA5LzIwMjUiLCJIZXRIYW5UaW1lIjoiMTcyNTg0MDAwMDAwMDAiLCJuYmYiOjE2OTY4NzA4MDAsImV4cCI6MTcyNTk4NzYwMH0.a30YDpRRs8DiVygvNfzGZr-a9fge4_6hBAu8wYOBE4o'
          }
        }
      );
      setBanner(response.data.content);
    } catch (error) {
      console.error('Error fetching banners:', error);
    }
  };

  useEffect(() => {
    bannerAPI();
  }, []);

  return (
    <div className="m-auto w-[80%]" style={{ marginTop: "60px" }}>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {banner.map((value) => (
          <SwiperSlide key={value.maBanner}>
            <div className="relative">
              <img
                className="w-full h-full"
                src={value.hinhAnh}
                alt=""
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
