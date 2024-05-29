import { createSlice } from "@reduxjs/toolkit";
import { quanLyNguoiDungActionsThunks } from ".";
import { getUserLogin } from "../../utils/getuserlogin";
import { TOKEN } from "../../constant/localStorage";

const LOCAL_USER_LOGIN_KEY = "USER";
const initialState = {
  isFetchingRegister: false,
  isFetchingLogin: false,
  userLogin: getUserLogin(),
  heThongRapChieu: [],
};
export const {
  reducer: quanLyNguoiDungReducer,
  actions: quanLyNguoiDungActions,
} = createSlice({
  name: "quanLyNguoiDung",
  initialState,
  //Xứ lý action đồng bộ
  reducers: {
    logOut: (state) => {
      state.userLogin = undefined;
      localStorage.removeItem(LOCAL_USER_LOGIN_KEY);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(quanLyNguoiDungActionsThunks.registerThunk.pending, (state) => {
        console.log("register pending");
        state.isFetchingRegister = true;
      })
      .addCase(
        quanLyNguoiDungActionsThunks.registerThunk.fulfilled,
        (state, payload) => {
          console.log("payload 1", payload);
          state.isFetchingRegister = false;
        }
      )
      .addCase(
        quanLyNguoiDungActionsThunks.registerThunk.rejected,
        (state, action) => {
          console.log("action 1", action);
          state.isFetchingRegister = false;
        }
      )
      //login thunk
      .addCase(quanLyNguoiDungActionsThunks.loginThunk.pending, (state) => {
        console.log("register pending");
        state.isFetchingLogin = true;
      })

      .addCase(
        quanLyNguoiDungActionsThunks.loginThunk.fulfilled,
        (state, payload) => {
          console.log("payload 1", payload);
          state.isFetchingLogin = false;

          //lưu thông tin

          localStorage.setItem(LOCAL_USER_LOGIN_KEY, JSON.stringify(payload));
          localStorage.setItem(TOKEN, payload.payload.accessToken);

          state.userLogin = payload;
        }
      )
      .addCase(
        quanLyNguoiDungActionsThunks.loginThunk.rejected,
        (state, action) => {
          console.log("action 1", action);
          state.isFetchingLogin = false;
        }
      );
  },
});
