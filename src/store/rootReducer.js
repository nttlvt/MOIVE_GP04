import { combineReducers } from "@reduxjs/toolkit";
import { quanLyNguoiDungReducer } from "./NguoiDung/slice";
import { quanLyRapReducer } from "./Rap/slice";
import { quanLyDatVeReducer } from "./QuanLyDatVe/QuanLyDatVeReducer";
import { addPhimReducer } from "./Phim/slice";
import { updatePhimReducer } from "./Phim/sliceUpload";
import { deletePhimReducer } from "./Phim/sliceDelete";

export const rootReducer = combineReducers({
    quanLyNguoiDung: quanLyNguoiDungReducer,
    quanLyRap: quanLyRapReducer,
    quanLyDatVe: quanLyDatVeReducer,
    addPhim: addPhimReducer,
    updatePhim: updatePhimReducer,
    delPhim: deletePhimReducer
})