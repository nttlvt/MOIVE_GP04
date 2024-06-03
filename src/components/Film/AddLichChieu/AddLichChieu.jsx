import React, { useEffect, useState } from "react";
import { Button, Form, Select, DatePicker, InputNumber } from "antd";
import { quanLyRapServices } from "../../../services/qlRap.services";
import { useGetInforMovie } from "../../../hooks/api/useGetInforMovie";
import { useForm, Controller } from "react-hook-form";
import moment from "moment";

export const AddLichChieu = () => {
  const { data } = useGetInforMovie();
  const [state, setState] = useState({
    heThongRapChieu: [],
    cumRapChieu: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        let result = await quanLyRapServices.getTtHeThongRap();
        setState({
          ...state,
          heThongRapChieu: result.data.content,
        });
      } catch (err) {}
    };

    fetchData();
  }, []);
  const handleChangeHeThongRap = async (value) => {
    try {
      let result = await quanLyRapServices.getTtCumRap(value);
      setState({
        ...state,
        cumRapChieu: result.data.content,
      });
      console.log(value);
    } catch (err) {}
  };

  const handleChangeCumRap = (value) => {
    console.log(value);
  };

  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      maPhim: data?.maPhim,
      ngayChieuGioChieu: "",
      maRap: "",
      giaVe: "",
    },
  });

  useEffect(() => {
    if (data) {
      reset({
        maPhim: data.maPhim,
        ngayChieuGioChieu: "",
        maRap: "",
        giaVe: "",
      });
    }
  }, [data, reset]);

  const onSubmit = async (formData) => {
    try {
      const result = await quanLyRapServices.createLichChieu(formData);
      alert("Tạo lịch chiếu phim thành công");
    } catch (err) {
      alert("Tạo lịch chiếu phim thất bại!");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>
        <div className="text-2xl mb-5">TẠO LỊCH CHIẾU - {data?.tenPhim}</div>
        <img src={data?.hinhAnh} width={300} height={100} alt="" />
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{ maxWidth: 600 }}
        className=""
      >
        <div className="pl-[100px]">
          <Form.Item label="Hệ thống rạp">
            <Select
              options={state.heThongRapChieu.map((htr) => ({
                label: htr.tenHeThongRap,
                value: htr.maHeThongRap,
              }))}
              onChange={(value) => {
                handleChangeHeThongRap(value);
              }}
              placeholder="Chọn hệ thống rạp"
            />
          </Form.Item>

          <Form.Item label="Cụm rạp">
            <Controller
              name="maRap"
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  options={state.cumRapChieu.map((cum) => ({
                    label: cum.tenCumRap,
                    value: cum.maCumRap,
                  }))}
                  onChange={(value) => {
                    field.onChange(value);
                    handleChangeCumRap(value);
                  }}
                  placeholder="Chọn cụm rạp"
                />
              )}
            />
          </Form.Item>

          <Form.Item label="Ngày chiếu giờ chiếu">
            <Controller
              name="ngayChieuGioChieu"
              control={control}
              render={({ field }) => (
                <DatePicker
                  {...field}
                  format="DD/MM/YYYY hh:mm:ss"
                  showTime
                  value={
                    field.value
                      ? moment(field.value, "DD/MM/YYYY hh:mm:ss")
                      : null
                  }
                  onChange={(date, dateString) => field.onChange(dateString)}
                />
              )}
            />
          </Form.Item>

          <Form.Item label="Giá vé">
            <Controller
              name="giaVe"
              control={control}
              render={({ field }) => (
                <InputNumber
                  {...field}
                  min={75000}
                  max={150000}
                  onChange={(value) => field.onChange(value)}
                />
              )}
            />
          </Form.Item>

          <Form.Item className="ml-[200px]">
            <Button htmlType="submit" type="primary">
              Tạo lịch chiếu
            </Button>
          </Form.Item>
        </div>
      </form>
    </div>
  );
};
