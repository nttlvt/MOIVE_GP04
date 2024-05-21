import { createAsyncThunk } from "@reduxjs/toolkit";
import { quanLyRapServices } from "../../services/qlRap.services";

export const quanLyRapThunks = createAsyncThunk(
    'quanLyRap/quanLyRapThunks',
    async (_, { rejectWithValue }) => {
        try {
            const response = await quanLyRapServices.getRap();
            return response.data.content;  
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);
