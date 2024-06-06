import { SearchOutlined } from "@ant-design/icons";
import { Avatar, Button, Input, Popover } from "antd";
import React from "react";
import { LichIcon, RapIcon, UserIcon } from "../../assets/icon/UserIcon";
import { useDispatch, useSelector } from "react-redux";
import { quanLyNguoiDungActions } from "../../store/NguoiDung/slice";
import { useNavigate } from "react-router-dom";
import { PATH } from "../../constant/config";

export const Header = () => {
  const { userLogin } = useSelector((state) => state.quanLyNguoiDung);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(quanLyNguoiDungActions.logOut());
  };

  const content = userLogin ? (
    <div className="text-white">
      <p className="font-bold user mb-3 text-center">
        {userLogin.payload.hoTen}
      </p>
      <div className="flex flex-col gap-2">
        {userLogin.payload.maLoaiNguoiDung === "QuanTri" && (
          <Button type="primary" onClick={() => navigate(PATH.film)}>
            Thiết lập
          </Button>
        )}
        <Button type="primary" danger onClick={handleLogout}>
          Đăng xuất
        </Button>
      </div>
    </div>
  ) : (
    <Button type="primary" onClick={() => navigate(PATH.dangnhap)}>
      Đăng nhập
    </Button>
  );

  return (
    <div className="">
      <div className="header__top">
        <div className="header__top--content flex gap-36">
          <a className="logo" href="/">
            <img
              width={130}
              height={130}
              src="https://cinestar.com.vn/_next/image/?url=%2Fassets%2Fimages%2Fheader-logo.png&w=1920&q=75"
              alt=""
            />
          </a>

          <div className="order flex mt-5">
            <Button
              className="flex font-bold"
              style={{
                backgroundColor: "#F3EA28",
                border: "none",
                height: "40px",
                lineHeight: "32px",
              }}
            >
              <img
                src="https://cinestar.com.vn/assets/images/ic-ticket.svg"
                className="mr-2 mt-1"
                alt=""
              />
              <a className="">ĐẶT VÉ NGAY</a>
            </Button>
            <Button
              className="flex ml-2 font-bold text-white"
              style={{
                backgroundColor: "#663399",
                border: "none",
                height: "40px",
                lineHeight: "32px",
              }}
            >
              <img src="" alt="" />
              <a className="">ĐẶT BẮP NƯỚC</a>
            </Button>
          </div>

          <div className="header__top--right flex gap-10">
            <Input
              placeholder="Tìm phim, rạp"
              style={{
                cursor: "pointer",
                height: "40px",
                width: "250px",
                marginTop: "20px",
                borderRadius: "50px",
              }}
              suffix={<SearchOutlined />}
            />

            <Popover
              content={content}
              className="text-white flex mt-5"
              overlayInnerStyle={{ marginTop: "-30px" }}
              overlayClassName="custom-popoverr"
            >
              <Avatar size={"large"} icon={<UserIcon />} />
              <p className="mt-3 font-bold user">
                <span>Tài khoản</span>
              </p>
            </Popover>

            <Popover
              className="text-white flex gap-2 mt-5"
              content={
                <div
                  className="flex gap-2"
                  style={{ width: "60px", marginTop: "-4px" }}
                >
                  <img
                    src="https://cinestar.com.vn/assets/images/footer-america.png"
                    style={{ width: "24px", height: "24px" }}
                    alt=""
                  />
                  <span className="flex gap-2 text-white">
                    <p className="">ENG</p>
                  </span>
                </div>
              }
              overlayClassName="custom-popoverr"
              overlayInnerStyle={{ marginTop: "-25px" }}
            >
              <div className="mt-[30px]">
                <img
                  src="https://cinestar.com.vn/assets/images/footer-vietnam.svg"
                  style={{ width: "24px", height: "24px" }}
                  alt=""
                />
                <span className="flex gap-2">
                  <p className="mt-[2px]">VN</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 320 512"
                    height="16"
                    width="14"
                  >
                    <path
                      fill="#fff"
                      d="M182.6 470.6c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8H288c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128z"
                    />
                  </svg>
                </span>
              </div>
            </Popover>
          </div>
        </div>
      </div>

      <div className="header__bot flex gap-[520px] pb-6 font-bold">
        <div className="header__bot--left flex gap-9">
          <div className="text-white flex mt-5">
            <Avatar size={"large"} icon={<RapIcon />} />
            <Popover
              content={
                <div
                  className="flex gap-56 text-white font-bold"
                  style={{ width: "1190px" }}
                >
                  <a>Cinestart Kiên Giang</a>
                  <a>Cinestart TP HCM</a>
                  <a>Cinestart Đà Lạt</a>
                  <a>Cinestart Bình Dương</a>
                </div>
              }
              placement="bottom"
              arrow={false}
              overlayClassName="custom-popover"
            >
              <a className="mt-3">Chọn rạp</a>
            </Popover>
          </div>

          <div className="text-white flex mt-5">
            <Avatar size={"large"} icon={<LichIcon />} />
            <a className="mt-3">Lịch chiếu</a>
          </div>
        </div>

        <div className="header__bot--right flex gap-9 text-white mt-6">
          <a style={{ textDecoration: "underline" }}>Khuyến mãi</a>
          <a style={{ textDecoration: "underline" }}>Thuê sự kiện</a>
          <a style={{ textDecoration: "underline" }}>Tất cả các giá trị</a>
          <a style={{ textDecoration: "underline" }}>Giới thiệu</a>
        </div>
      </div>
    </div>
  );
};
