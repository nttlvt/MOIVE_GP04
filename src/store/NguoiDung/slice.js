import { createSlice } from "@reduxjs/toolkit";
import { quanLyNguoiDungActionsThunks } from ".";



const LOCAL_USER_LOGIN_KEY='USER'
const initialState = {
    isFetchingRegister: false,
    isFetchingLogin: false,
    userLogin:localStorage.getItem(LOCAL_USER_LOGIN_KEY)
}
export const { reducer: quanLyNguoiDungReducer, actions: quanLyNguoiDungActions } = createSlice({
    name: 'quanLyNguoiDung',
    initialState,
    //Xứ lý action đồng bộ
    reducers: {},
    //xử lý action bất đồng bộ

    extraReducers: (builder) => {
        builder
            .addCase(quanLyNguoiDungActionsThunks.registerThunk.pending, (state) => {

                console.log('register pending')
                state.isFetchingRegister = true
            })
            .addCase(quanLyNguoiDungActionsThunks.registerThunk.fulfilled, (state, payload) => {
                console.log('payload 1', payload)
                state.isFetchingRegister = false

            })
            .addCase(quanLyNguoiDungActionsThunks.registerThunk.rejected, (state, action) => {
                console.log('action 1', action)
                state.isFetchingRegister = false
            })
            //login thunk
            .addCase(quanLyNguoiDungActionsThunks.loginThunk.pending, (state) => {

                console.log('register pending')
                state.isFetchingLogin = true
            })

            .addCase(quanLyNguoiDungActionsThunks.loginThunk.fulfilled, (state, payload) => {
                console.log('payload 1', payload)
                state.isFetchingLogin = false

                //lưu thông tin
                localStorage.setItem(LOCAL_USER_LOGIN_KEY,JSON.stringify(payload))

            })
            .addCase(quanLyNguoiDungActionsThunks.loginThunk.rejected, (state, action) => {
                console.log('action 1', action)
                state.isFetchingLogin = false
            })
    },

})