import { combineReducers } from "@reduxjs/toolkit";
import { quanLyNguoiDungReducer } from "./NguoiDung/slice";
import { quanLyRapReducer } from "./Rap/slice";
import { addPhimReducer } from "./Phim/slice";
import { updatePhimReducer } from "./Phim/sliceUpload";


export const rootReducer = combineReducers({
    quanLyNguoiDung: quanLyNguoiDungReducer,
    quanLyRap: quanLyRapReducer,
    addPhim: addPhimReducer,
    updatePhim: updatePhimReducer
})