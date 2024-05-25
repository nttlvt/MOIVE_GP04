import { combineReducers } from "@reduxjs/toolkit";
import { quanLyNguoiDungReducer } from "./NguoiDung/slice";
import { quanLyRapReducer } from "./Rap/slice";
import { addPhimReducer } from "./Phim/slice";


export const rootReducer = combineReducers({
    quanLyNguoiDung: quanLyNguoiDungReducer,
    quanLyRap: quanLyRapReducer,
    addPhim: addPhimReducer,
})