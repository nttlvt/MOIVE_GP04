import { combineReducers } from "@reduxjs/toolkit";
import { quanLyNguoiDungReducer } from "./NguoiDung/slice";


export const rootReducer = combineReducers({
    quanLyNguoiDung: quanLyNguoiDungReducer,
})