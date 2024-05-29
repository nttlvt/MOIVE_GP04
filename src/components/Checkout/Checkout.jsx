import React, { Fragment, useEffect } from 'react'
// import { CheckoutTemplate } from '../template/CheckoutTemplate'
import { useDispatch, useSelector } from 'react-redux'
// import { Button } from 'antd'
import style from './Checkout.module.css'
import { quanLyDatVeActionsThunks } from '../../store/QuanLyDatVe'
import { useParams } from 'react-router-dom'
import './Checkout.css'
import { CloseCircleOutlined } from '@ant-design/icons'
import { quanLyDatVeActions } from '../../store/QuanLyDatVe/QuanLyDatVeReducer'
import { ThongTinDatVe } from '../../store/QuanLyDatVe/ThongTinDatVe'
import { datVeThunk } from '../../store/QuanLyDatVe/thunk'
import { UserIcon } from '../../assets/icon/UserIcon'
export const Checkout = (props) => {
  const params = useParams()
  // console.log(params)
  const { userLogin } = useSelector(state => state.quanLyNguoiDung)
  console.log(userLogin)
  const { chiTietPhongVe, danhSachGheDangDat } = useSelector(state => state.quanLyDatVe);
  console.log(danhSachGheDangDat)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(quanLyDatVeActionsThunks.quanLyDatVeThunk(params.id))

  }, [])


  console.log('chi tiet phong ve1', chiTietPhongVe)
  const { thongTinPhim, danhSachGhe } = chiTietPhongVe
  const renderSeats = () => {
    return danhSachGhe.map((ghe, index) => {
      let gheVip = ghe.loaiGhe === 'Vip' ? 'gheVip' : '';
      let cgheDaDat = ghe.daDat === true ? 'gheDaDat' : '';
      let gheDagDat = ''
      let indexGheDangDat = danhSachGheDangDat.findIndex(gheDD => gheDD.maGhe == ghe.maGhe)
      let classGheDaDuocDat = ''
      if (userLogin.payload.taiKhoan === ghe.taiKhoanNguoiDat) {
        classGheDaDuocDat = 'gheDaDuocDat'
      }
      if (indexGheDangDat != -1) {
        gheDagDat = 'gheDangDat'
      }
      return <Fragment key={index}>

        {
          // ghe.loaiGhe === 'Vip' ? <button className={` ${style['ghe']} ${style['gheVip']}`}>{ghe.stt}</button> :
          <button
            onClick={() => {
              dispatch(quanLyDatVeActions.DAT_VE(
                ghe
              ))
            }}
            disabled={ghe.DaDat} className={`ghe ${gheVip} ${cgheDaDat} ${gheDagDat} ${classGheDaDuocDat}`}>
            {ghe.DaDat ? classGheDaDuocDat = !'' ? <UserIcon className='-z-20' /> : <CloseCircleOutlined /> : ghe.stt}
          </button>
        }
      </Fragment>

    })
  }
  return (
    <div className="container min-h-screen mt-5">
      <div className="grid grid-cols-12 text-white">
        <div className="col-span-9 text-white">
          <div className=" flex flex-col items-center  mt-5  ">
            <div className='bg-white w-[80%] h-[15px] '>

            </div>
            <div className={`${style['trapezoid']} text-center`} >
              <h3 className='text-black text-xl mt-6'>Màn hình</h3>
            </div>
            <div>
              {renderSeats()}
            </div>


          </div>
          <div className="mt-5 flex justify-center w-full	">
            <table className="table-fixed">
              <thead>
                <tr className="mt-3">
                  <th className="">Ghế chưa đặt</th>
                  <th className="">ghế đang đặt</th>
                  <th className="">Ghế vip</th>
                  <th className="" >Ghế đã đặt</th>
                  <th className="">Ghế bạn đặt</th>
                </tr>
              </thead>

              <tbody className="px-20">
                <tr>
                  <td><button className='ghe '></button></td>
                  <td><button className='gheDangDat ghe'></button></td>
                  <td><button className='ghe gheVip'></button></td>
                  <td><button className='ghe gheDaDat'></button></td>
                  <td><button className='ghe gheDaDuocDat'></button></td>

                </tr>
              </tbody>
            </table>
          </div>

        </div>
        <div className="col-span-3 text-white">
          <h3 className="text-center  text-4xl">0d</h3>
          <hr />
          <h3 className="text-xl">{thongTinPhim?.tenPhim} </h3>
          <p>Địa điểm: {thongTinPhim?.tenCumRap} - {thongTinPhim?.tenRap}</p>
          <p>Ngày chiếu:{thongTinPhim?.ngayChieu} - {thongTinPhim?.gioChieu} RẠP 5</p>
          <hr />

          <div className='flex my-5'>
            <div className='w-4/5'>
              <span className="text-red-500">Ghế</span>
              {
                danhSachGheDangDat.map((gheDD) => {
                  return <span className="text-green-600 text-2xl mx-3">
                    {gheDD.stt}
                  </span>
                })
              }
            </div>
            <div className="text-right">
              <span className="text-green-400">
                {
                  danhSachGheDangDat.reduce((tongTien, ghe, index) => {
                    return tongTien += ghe.giaVe
                  }, 0).toLocaleString()
                }
              </span>
            </div>
          </div>

          <hr />
          <div className='my-5'>
            <i>Email</i> <br />
            {userLogin.payload.email}
          </div>
          <div className='my-5'>
            <i>Số điện thoại</i> <br />
            {userLogin.payload.soDT}
          </div>
          <div>
            <div
              onClick={() => {
                const thongTinDatVe = new ThongTinDatVe()
                thongTinDatVe.maLichChieu = params.id
                thongTinDatVe.danhSachVe = danhSachGheDangDat
                console.log('thong tin ve', thongTinDatVe)
                dispatch(datVeThunk(thongTinDatVe))
              }}
              className="bg-green-500 text-white w-full text-center py-3 font-bold text-2 cursor-pointer">
              Đặt vé
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
