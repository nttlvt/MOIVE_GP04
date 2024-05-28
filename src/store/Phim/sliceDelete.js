import { createSlice } from "@reduxjs/toolkit";
import { deletePhimActionsThunks } from ".";

const initialState = {};

export const { reducer: deletePhimReducer, actions: deletePhimActions } = createSlice({
  name: "delPhim",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(deletePhimActionsThunks.deletePhimThunks.fulfilled, (state, action) => {
      alert('Bạn đã xóa phim thành công!!')
    });
  },
});
