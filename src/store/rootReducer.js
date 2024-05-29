import { combineReducers } from "@reduxjs/toolkit";
import { quanLyNguoiDungReducer } from "./NguoiDung/slice";
import { quanLyRapReducer } from "./Rap/slice";
import { quanLyDatVeReducer } from "./QuanLyDatVe/QuanLyDatVeReducer";


export const rootReducer = combineReducers({
    quanLyNguoiDung: quanLyNguoiDungReducer,
    quanLyRap: quanLyRapReducer,
    quanLyDatVe: quanLyDatVeReducer,
})