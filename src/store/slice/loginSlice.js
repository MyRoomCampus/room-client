import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { reqLogin } from "../../api/request";
import { Notification } from "@douyinfe/semi-ui";
import cookie from "react-cookies";

let initialState = {
  username: "",
  password: "",
};
export const asyncLogin = createAsyncThunk("login", async (user) => {
  initialState = user;
  const response = await reqLogin(user);
  return response.data;
});

const LoginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    logOut(state, action) {
      return { redirectTo: "" };
    },
  },
  extraReducers: {
    [asyncLogin.pending]: () => {
      console.log("Pending!");
    },
    [asyncLogin.fulfilled]: (state, { payload }) => {
      console.log("login Successfully!");
      localStorage.setItem("ROOM_JWT_TOKEN_KEY", payload.accessToken);
      localStorage.setItem("ROOM_JWT_REFRESH_TOKEN_KEY", payload.refreshToken);
      localStorage.setItem("REFRESH_TIME", new Date().getTime());
      // 保存cookie
      // {path:'/'}意思是所有页面都能用这个cookie
      cookie.save("userData", initialState, { path: "/" });
      cookie.save("redirectTo", "/", { path: "/" });

      return { ...state, redirectTo: "/", userData: initialState };
    },
    [asyncLogin.rejected]: () => {
      console.log("Rejected!");
      Notification.warning({
        title: "用户名或密码错误！登录失败！",
        duration: 3,
        theme: "light",
        position: "top",
      });
    },
  },
});
export const { logOut } = LoginSlice.actions;
export default LoginSlice.reducer;
