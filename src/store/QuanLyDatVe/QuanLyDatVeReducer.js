import { createSlice } from "@reduxjs/toolkit";
import { quanLyDatVeActionsThunks } from ".";
import { ThongTinLichChieu } from "./ThongTinPhongVe";


const initialState = {
    chiTietPhongVe: new ThongTinLichChieu(),
    danhSachGheDangDat: [],
};

export const { reducer: quanLyDatVeReducer, actions: quanLyDatVeActions } = createSlice({
    name: 'quanLyDatVe',
    initialState,
    reducers: {
        DAT_VE: (state, action) => {
            console.log("payload 1", action.payload)

            const danhSachGheCapNhat = [...state.danhSachGheDangDat]
            const index = danhSachGheCapNhat.findIndex(gheDD => gheDD.maGhe === action.payload.maGhe)
            console.log('danh sach ghe dang daat', danhSachGheCapNhat)
            if (index != -1) {
                danhSachGheCapNhat.splice(index, 1)
            }
            else {
                danhSachGheCapNhat.push(action.payload)
            }
            state.danhSachGheDangDat = danhSachGheCapNhat
            // return [...danhSachGheCapNhat]
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(quanLyDatVeActionsThunks.quanLyDatVeThunk.pending, (state) => {
                console.log('dat ve pending')

            })
            .addCase(quanLyDatVeActionsThunks.quanLyDatVeThunk.fulfilled, (state, payload) => {
                console.log('payload 3', payload.payload)
                state.chiTietPhongVe = payload.payload
            })
            .addCase(quanLyDatVeActionsThunks.quanLyDatVeThunk.rejected, (state, action) => {
                console.log('action 1', action)
            })

            .addCase(quanLyDatVeActionsThunks.datVeThunk.pending, (state) => {
                console.log('dat ve 2')

            })
            .addCase(quanLyDatVeActionsThunks.datVeThunk.fulfilled, (state, payload) => {
                console.log('payload 2', payload.payload)
            })
            .addCase(quanLyDatVeActionsThunks.datVeThunk.rejected, (state, action) => {
                console.log('action 2', action)
            });
    }
});
