import { createAsyncThunk } from "@reduxjs/toolkit";
import { quanLyPhimServices } from "../../services/quanLyPhim.services";

export const addPhimThunks = createAsyncThunk(
    'addPhim/addPhimThunks',
    async (formData, { rejectWithValue }) => {
        try {
            const response = await quanLyPhimServices.addPhim(formData);
            return response.data;  
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);