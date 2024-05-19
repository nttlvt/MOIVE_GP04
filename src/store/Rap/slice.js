import { createSlice } from "@reduxjs/toolkit";
import { quanLyRapActionsThunks } from ".";

const initialState = {
    heThongRapChieu: [],    
    loading: false,
    error: null,
};

export const { reducer: quanLyRapReducer, actions: quanLyRapActions } = createSlice({
    name: 'quanLyRap',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(quanLyRapActionsThunks.quanLyRapThunks.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(quanLyRapActionsThunks.quanLyRapThunks.fulfilled, (state, action) => {
                state.loading = false;
                state.heThongRapChieu = action.payload;
            })
            .addCase(quanLyRapActionsThunks.quanLyRapThunks.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    }
});
