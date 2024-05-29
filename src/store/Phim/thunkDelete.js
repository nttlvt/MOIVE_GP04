import { createAsyncThunk } from "@reduxjs/toolkit";
import { quanLyPhimServices } from "../../services/quanLyPhim.services";

export const deletePhimThunks = createAsyncThunk(
  "deletePhim/deletePhimThunks",
  async (maPhim, { rejectWithValue }) => {
    try {
      const response = await quanLyPhimServices.deletePhim(maPhim);
      return response.data; // Trả về dữ liệu phản hồi nếu cần
    } catch (error) {
      return rejectWithValue(
        "Lỗi khi gửi yêu cầu xóa phim: " + error.message
      );
    }
  }
);
