import { createAsyncThunk } from "@reduxjs/toolkit";
import { qlNguoiDungServices } from "../../services/qlNguoiDung.services";
import { sleep } from "../../utils/sleep";



export const registerThunk = createAsyncThunk('quanLyNguoiDung/register',
    async (payload, { rejectWithValue, dispatch, getState }) => {
        try {
            console.log('payload', payload);
            await sleep()
            const res = await qlNguoiDungServices.dangKy(payload)

            console.log('res:', res)
            return res
        }
        catch (err) {
            return rejectWithValue(err)
        }

    })

export const loginThunk = createAsyncThunk(
    'quanLyNguoiDung/login',
    async (payload, { rejectWithValue, dispatch, getState }) => {
        try {
            console.log('payload', payload);
            await sleep()

            const result = await qlNguoiDungServices.dangNhap(payload)
            console.log('result', result);
            return result.data.content
        }
        catch (err) {
            return rejectWithValue(err)
        }

    }
)