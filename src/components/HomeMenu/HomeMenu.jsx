import { Tabs } from 'antd';
import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { quanLyRapActionsThunks } from '../../store/Rap';
import { NavLink } from 'react-router-dom';
import moment from 'moment';

export const HomeMenu = () => {
    const { TabPane } = Tabs;
    const [tabPosition, setTabPosition] = useState('left');
    const { heThongRapChieu } = useSelector((state) => state.quanLyRap);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(quanLyRapActionsThunks.quanLyRapThunks());
    }, [dispatch]);

    const changeTabPosition = (value) => setTabPosition(value);

    return (
        <div>
            <Tabs tabPosition={tabPosition} className='bg-slate-50 container' style={{borderRadius: '20px', marginBottom: '100px', marginTop: '60px', paddingTop: '50px', paddingBottom: '40px'}}>
                {heThongRapChieu && heThongRapChieu.slice(0, 5).map((rap, index) => (
                    <TabPane tab={<img src={rap.logo} alt={rap.tenHeThongRap} className='rounded-full' width="50" />} key={index}>
                        <Tabs tabPosition={tabPosition} className=''>
                            {rap.lstCumRap?.map((cumRap, index) => (
                                <TabPane 
                                    tab={
                                        <div style={{ width: '300px', display: 'flex' }}>
                                            <img src={cumRap.hinhAnh} alt={cumRap.tenCumRap} width="50" /> <br />
                                            <div className="text-left ml-2">
                                                {cumRap.tenCumRap}
                                                <p className="text-red-200">Chi tiết</p>
                                            </div>
                                        </div>
                                    } 
                                    key={index}
                                >
                                    {cumRap.danhSachPhim.map((phim, index) => (
                                        <Fragment key={index}>
                                            <div className='my-5' >
                                                <div style={{display: 'flex'}}>
                                                    <img style={{height:'130px', width: '100px', borderRadius: '10px', marginRight: '15px'}} src={phim.hinhAnh} alt={phim.tenPhim} />
                                                    <div>
                                                        <h1 className="text-[20px] font-bold">{phim.tenPhim}</h1>
                                                        <p className='mb-5'>{cumRap.diaChi}</p>
                                                        <div className="grid grid-cols-6 gap-5">
                                                            {phim.lstLichChieuTheoPhim?.slice(0,12).map((lichChieu, index) => {
                                                                return <NavLink to={`checkout/${lichChieu.maLichChieu}`} key={index} className="text-yellow">
                                                                    {moment(lichChieu.ngayChieuGioChieu).format('hh:mm A')}
                                                                </NavLink>
                                                            })}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <hr />
                                        </Fragment>
                                    ))}
                                </TabPane>
                            ))}
                        </Tabs>
                    </TabPane>
                ))}
            </Tabs>
        </div>
    );
};
