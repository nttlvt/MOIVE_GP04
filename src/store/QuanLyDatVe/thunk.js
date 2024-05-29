import { createAsyncThunk } from "@reduxjs/toolkit";
import { qlDatVeService } from "../../services/qlDatVe.services";


export const quanLyDatVeThunk = createAsyncThunk('quanLyDatVe/quanLyDatVeThunks',
    async (maLichChieu, { rejectWithValue, dispatch, getState }) => {
        try {
            console.log('payload', maLichChieu );
            // await sleep()
            const res = await qlDatVeService.layChiTietPhongVe(maLichChieu)

            console.log('res:', res.data.content)
            return (res.data.content)
        }
        catch (err) {
            return rejectWithValue(err)
        }

    })
    export const datVeThunk = createAsyncThunk('datVe/datVeThunks',
    async (thongTinDatVe, { rejectWithValue, dispatch, getState }) => {
        try {
            console.log('payload', thongTinDatVe );
            // await sleep()
            const res = await qlDatVeService.datVe(thongTinDatVe)

            console.log('res1:', res.data.content)
            return (res.data.content)
        }
        catch (err) {
            return rejectWithValue(err)
        }

    })

