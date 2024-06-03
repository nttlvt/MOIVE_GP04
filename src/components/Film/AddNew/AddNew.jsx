import React, { useEffect, useState } from "react";
import { DatePicker, Form, Input, InputNumber, Switch } from "antd";
import { useForm, Controller } from "react-hook-form";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { addPhimActionsThunks } from "../../../store/Phim";
import { NavLink, useNavigate } from "react-router-dom";
import { PATH } from "../../../constant/config";

export const AddNew = () => {
  const [image, setImage] = useState("");

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      tenPhim: "",
      trailer: "",
      moTa: "",
      ngayKhoiChieu: "",
      dangChieu: true,
      sapChieu: false,
      hot: false,
      danhGia: 10,
      hinhAnh: {},
      maNhom: 'GP04',
    },
  });
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const { loading, error, success } = useSelector((state) => state.addPhim);
  

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("tenPhim", data.tenPhim);
    formData.append("trailer", data.trailer);
    formData.append("moTa", data.moTa);
    formData.append("ngayKhoiChieu", data.ngayKhoiChieu);
    formData.append("sapChieu", data.sapChieu);
    formData.append("dangChieu", data.dangChieu);
    formData.append("hot", data.hot);
    formData.append("danhGia", data.danhGia);
    formData.append("maNhom", data.maNhom); 
    formData.append("hinhAnh", data.hinhAnh);
    console.log(data.hinhAnh)

    dispatch(addPhimActionsThunks.addPhimThunks(formData));
    navigate(PATH.film)
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ maxWidth: 600 }}>
      <h3 className="mb-10 text-red-700 font-bold">THÊM PHIM</h3>
      <Form.Item label="Tên phim">
        <Controller
          name="tenPhim"
          control={control}
          render={({ field }) => <Input {...field} />}
        />
      </Form.Item>
      <Form.Item label="Trailer">
        <Controller
          name="trailer"
          control={control}
          render={({ field }) => <Input {...field} />}
        />
      </Form.Item>
      <Form.Item label="Mô tả">
        <Controller
          name="moTa"
          control={control}
          render={({ field }) => <Input {...field} />}
        />
      </Form.Item>
      <Form.Item label="Mã nhóm">
        <Controller
          name="maNhom"
          control={control}
          render={({ field }) => <Input {...field} />}
        />
      </Form.Item>
      <Form.Item label="Ngày khởi chiếu">
        <Controller
          name="ngayKhoiChieu"
          control={control}
          render={({ field }) => (
            <DatePicker
              {...field}
              format="DD/MM/YYYY"
              value={field.value ? moment(field.value, "DD/MM/YYYY") : null}
              onChange={(date, dateString) => field.onChange(dateString)}
            />
          )}
        />
      </Form.Item>
      <Form.Item label="Đang chiếu">
        <Controller
          name="dangChieu"
          control={control}
          render={({ field }) => (
            <Switch
              checked={field.value}
              onChange={(checked) => field.onChange(checked)}
            />
          )}
        />
      </Form.Item>
      <Form.Item label="Sắp chiếu">
        <Controller
          name="sapChieu"
          control={control}
          render={({ field }) => (
            <Switch
              checked={field.value}
              onChange={(checked) => field.onChange(checked)}
            />
          )}
        />
      </Form.Item>
      <Form.Item label="Hot">
        <Controller
          name="hot"
          control={control}
          render={({ field }) => (
            <Switch
              checked={field.value}
              onChange={(checked) => field.onChange(checked)}
            />
          )}
        />
      </Form.Item>
      <Form.Item label="Số sao">
        <Controller
          name="danhGia"
          control={control}
          render={({ field }) => <InputNumber {...field} min={1} max={10} />}
        />
      </Form.Item>
      <Form.Item label="Hình ảnh">
        <Controller
          name="hinhAnh"
          control={control}
          render={({ field }) => (
            <input className="mt-2"
              type="file"
              onChange={(e) => {
                const file = e.target.files[0];

                if (
                  file.type === "image/jpeg" ||
                  file.type === "image/jpg" ||
                  file.type === "image/gif" ||
                  file.type === "image/png"
                ) {
                  const reader = new FileReader();
                  reader.onloadend = (event) => {
                    setImage(event.target.result);
                    field.onChange(file);
                  };
                  reader.readAsDataURL(file);
                  console.log(file.type)
                }
              }}
            />
          )}
        />
        <img style={{ width: "50%", height: "50%", marginTop: '15px'}} src={image} alt="" />
      </Form.Item>
      <Form.Item label="Thao tác">
        <button
          type="submit"
          className="bg-blue-300 text-white p-2 text-center rounded-xl"
        >
          {loading ? "Đang thêm..." : "Thêm phim"}
        </button>
        {error && <div className="error">{error}</div>}
        {success && (
          <div className="success">Phim đã được thêm thành công!</div>
        )}
      </Form.Item>
    </form>
  );
};
