import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useGetPhimList } from "../../hooks/api";
import { Button } from "antd";
import { NavLink, Navigate } from "react-router-dom";
import { PATH } from "../../constant/config";
export const ListCarousel = () => {
  const { data } = useGetPhimList();
  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + "...";
  };
  return (
    <div className="my-5 m-auto w-[80%] " style={{ marginTop: "60px" }}>
      <Swiper
        navigation={true}
        slidesPerView={4}
        spaceBetween={30}
        modules={[Navigation, Autoplay, Pagination]}
        autoplay={{
            delay: 2000,
            disableOnInteraction: false,
        }}
        className="w-full"
      >
        {data &&
          data.map((value) => {
            const tenPhim = truncateText(value.tenPhim, 22)
            return (
              <SwiperSlide className="card border border-white p-4 text-center" key={value.id}>
                <img className=" h-[300px] max-w-full" src={value.hinhAnh} alt="" />
                <p className="text-[20px] text-white mt-3">{tenPhim}</p>
                <div className="text-center mt-4">
                  <NavLink className="text-white bg-red-500 hover:bg-red-700 font-bold py-2 px-4 rounded" to={`/detail/${value.maPhim}`}>Đặt vé</NavLink>
                </div>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
};
