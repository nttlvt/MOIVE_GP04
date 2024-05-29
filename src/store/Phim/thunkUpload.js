import { createAsyncThunk } from "@reduxjs/toolkit";
import { quanLyPhimServices } from "../../services/quanLyPhim.services";

export const updatePhimThunks = createAsyncThunk(
    'updatePhim/updatePhimThunks',
    async (formData, { rejectWithValue }) => {
        try {
            const response = await quanLyPhimServices.updatePhim(formData);
            return response.data
        } catch (error) {
            return rejectWithValue("Lỗi khi gửi yêu cầu cập nhật phim: " + error.message);
        }
    }
); 
