import React, { useState } from "react";
import { DatePicker, Form, Input, InputNumber, Switch } from "antd";
import { useForm, Controller } from "react-hook-form";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { addPhimThunks } from "../../../store/Phim/thunk";
import { addPhimActionsThunks } from "../../../store/Phim";

export const AddNew = () => {
  const [image, setImage] = useState("");

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      tenPhim: "Soulmate",
      trailer: "https://www.youtube.com/watch?v=tCC7hrheTR8&ab_channel=CGVCinemasVietnam",
      moTa: "Soulmate (tựa Việt: Tri Kỷ) là câu chuyện về Mi So (Kim Da Mi thủ vai) và Ha Eun (Jeon So Nee thủ vai) trong một mối quan hệ chồng chéo chất chứa những hạnh phúc, nỗi buồn, rung động và cả biệt ly. Từ giây phút đầu tiên gặp nhau dưới mái trường tiểu học, giữa hai cô gái đã hình thành một sợi dây liên kết đặc biệt. Và khi Ham Jin Woo (Byun Woo Seok thủ vai) bước vào giữa cả hai, đó cũng là lúc những vết nứt trong mối quan hệ của Mi So và Ha Eun xuất hiện.",
      ngayKhoiChieu: "01/05/2024",
      dangChieu: true,
      sapChieu: false,
      hot: false,
      danhGia: 9,
      hinhAnh: {},
      maNhom: 'GP04',
    },
  });
  const dispatch = useDispatch();
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
    formData.append("maNhom", data.maNhom); // Thay GROUPID bằng mã nhóm của bạn
    formData.append("hinhAnh", data.hinhAnh);

    dispatch(addPhimActionsThunks.addPhimThunks(formData));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ maxWidth: 600 }}>
      <h3 className="mb-10">Thêm phim mới</h3>
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
            <input
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
                }
              }}
            />
          )}
        />
        <img style={{ width: "200px", height: "150px" }} src={image} alt="" />
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
