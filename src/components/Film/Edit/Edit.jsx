import React, { useEffect, useState } from "react";
import { DatePicker, Form, Input, InputNumber, Switch } from "antd";
import { useForm, Controller } from "react-hook-form";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { updatePhimActionsThunks } from "../../../store/Phim";
import { useGetInforMovie } from "../../../hooks/api/useGetInforMovie";

export const Edit = () => {
  const [image, setImage] = useState("");
  const { data } = useGetInforMovie();
  const dispatch = useDispatch();
  const { loading, error, success } = useSelector((state) => state.updatePhim);

  const {
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      maPhim: "",
      tenPhim: "",
      trailer: "",
      moTa: "",
      ngayKhoiChieu: "",
      dangChieu: true,
      sapChieu: false,
      hot: false,
      danhGia: 10,
      hinhAnh: {},
      maNhom: "GP04",
    },
  });

  useEffect(() => {
    if (data) {
      setValue("maPhim", data.maPhim);
      setValue("tenPhim", data.tenPhim);
      setValue("trailer", data.trailer);
      setValue("moTa", data.moTa);
      setValue(
        "ngayKhoiChieu",
        moment(data.ngayKhoiChieu).format("DD/MM/YYYY")
      );
      setValue("dangChieu", data.dangChieu);
      setValue("sapChieu", data.sapChieu);
      setValue("hot", data.hot);
      setValue("danhGia", data.danhGia);
      setImage(data.hinhAnh);
    }
  }, [data, setValue]);

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("maPhim", data.maPhim);
    formData.append("tenPhim", data.tenPhim);
    formData.append("trailer", data.trailer);
    formData.append("moTa", data.moTa);
    formData.append("ngayKhoiChieu", data.ngayKhoiChieu);
    formData.append("sapChieu", data.sapChieu);
    formData.append("dangChieu", data.dangChieu);
    formData.append("hot", data.hot);
    formData.append("danhGia", data.danhGia);
    formData.append("maNhom", data.maNhom);
    // formData.append("hinhAnh", data.hinhAnh);
    if (!data.hinhAnh[0] && !data.hinhAnh[0] !== image) {
      formData.append("hinhAnh", data.hinhAnh);
    }

    dispatch(updatePhimActionsThunks.updatePhimThunks(formData));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ maxWidth: 600 }}>
      <h3 className="mb-10 text-red-700 font-bold">CẬP NHẬT PHIM</h3>
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
                    console.log(file.type)
                  };
                  reader.readAsDataURL(file);
                }
              }}
            />
          )}
        />
        <img style={{ width: "40%", height: "40%", marginTop: "20px" }} src={image} alt="" />
      </Form.Item>
      <Form.Item >
        <button
          type="submit"
          className="bg-blue-300 text-white p-2 text-center rounded-xl"
        >
          {loading ? "Đang cập nhật..." : "Cập nhật phim"}
        </button>
      </Form.Item>
    </form>
  );
};
