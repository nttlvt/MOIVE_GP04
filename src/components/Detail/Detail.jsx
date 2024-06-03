import React from "react";
import { Button, CustomCard } from "@tsamantanis/react-glassmorphism";
import "@tsamantanis/react-glassmorphism/dist/index.css";
import "../../assets/style/circle.css";
import { Rate, Tabs } from "antd";
import { useGetDetailPhim } from "../../hooks/api";
import moment from "moment";
import { StarOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

export const Detail = () => {
  const { TabPane } = Tabs;
  const { data, isLoading } = useGetDetailPhim();
  const { heThongRapChieu } = useSelector((state) => state.quanLyRap);
  console.log("data", data);

  return (
    <>
      {data && (
        <div
          style={{
            // backgroundImage: `url(${data.hinhAnh})`,
            minHeight: "100vh",
            backgroundSize: "100%",
            backgroundPosition: "center",
          }}
          className="container"
        >
          <CustomCard
            style={{ minHeight: "100vh" }}
            effectColor="#C780FF" // required
            color="#14AEFF" // default color is white
            blur={10} // default blur value is 10px
            borderRadius={0} // default border radius value is 10px
          >
            <div className="grid grid-cols-12 text-white mt-5">
              <div className="col-span-7 col-start-2">
                <div className="grid grid-cols-3">
                  {data.hinhAnh && (
                    <img
                    className="col-span-1 rounded-lg shadow-lg"
                    src={data.hinhAnh}
                    style={{ width: "100%", height: "auto" }}
                    alt={data.tenPhim}
                  />
                  )}
                  <div className="col-span-2 ml-5">
                    <div className="text-sm">
                      Ngày chiếu:{" "}
                      {moment(data.ngayKhoiChieu).format("DD.MM - YYYY")}
                    </div>
                    <p className="text-4xl font-bold mt-5">{data.tenPhim}</p>
                    <p className="mt-5">{data.moTa}</p>
                  </div>
                </div>
              </div>

              <div className="col-span-4">
                <h1
                  style={{
                    marginLeft: "15%",
                    color: "yellow",
                    fontWeight: "bold",
                    fontSize: 15,
                  }}
                >
                  Đánh giá
                </h1>
                <h1
                  style={{ marginLeft: "15%" }}
                  className="text-green-400 text-2xl mt-5"
                >
                  <Rate
                    allowHalf
                    value={data.danhGia / 2}
                    style={{ color: "#78ed78", fontSize: 30 }}
                  />
                </h1>
                <div style={{ marginLeft: "15%" }} className={`c100 p${data.danhGia * 10} big mt-5`}>
                  <span>{data.danhGia * 10}%</span>
                  <div className="slice">
                    <div className="bar" />
                    <div className="fill" />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-[100px] container w-2/3 bg-white px-5 py-5 rounded-lg">
              <Tabs defaultActiveKey="1" centered>
                <TabPane tab="Lich Chieu" key="1" style={{minHeight: 300}}>
                  <div>
                    <Tabs tabPosition={"left"} className="text-white">
                      {data.heThongRapChieu?.map((htr, index) => {
                        return (
                          <TabPane
                            tab={
                              <div className="flex items-center justify-center">
                                <img
                                  className="rounded-full w-full"
                                  src={htr.logo}
                                  style={{height: 50}}
                                  alt=""
                                />
                                <div className="text-center ml-2">
                                  {htr.tenHeThongRap}
                                </div>
                              </div>
                            }
                            key={index}>
                            {htr.cumRapChieu?.map((cum, index) => {
                              return <div key={index} className="mt-5">
                                <div className="flex">
                                  <img style={{width: '60px', height: '60px'}} src={cum.hinhAnh} alt="" />
                                  <div className="ml-2">
                                    <p style={{fontSize: '20px', fontWeight: 'bold', lineHeight: 1}}>{cum.tenCumRap}</p>
                                    <p className="text-gray-400" style={{marginTop: 0}}>{cum.tenCumRap}</p>
                                  </div>
                                </div>
                                <div className="grid grid-cols-4 mt-7">
                                  {cum.lichChieuPhim?.slice(0, 12).map((lichChieu, index) => {
                                    return <NavLink to={`/checkout/${lichChieu.maLichChieu}`} key={index} className='col-span-1 text-green-800 font-bold'>
                                      {moment(lichChieu.ngayChieuGioChieu).format('hh:mm A')}
                                    </NavLink>
                                  })}
                                </div>
                              </div>
                            })}
                          </TabPane>
                        );
                      })}
                    </Tabs>
                  </div>
                </TabPane>

                {/* <TabPane tab="Thong tin" key="2">
                  tt
                </TabPane>

                <TabPane tab="Danh Gia" key="3">
                  dg
                </TabPane> */}
              </Tabs>
            </div>
          </CustomCard>
        </div>
      )}
    </>
  );
};
