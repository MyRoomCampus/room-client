import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Notification } from "@douyinfe/semi-ui";

import { reqRegister } from "../../api/request";
const initialState = {
  username: "",
  password: "",
  passwordConfirm: "",
};

export const asyncRegister = createAsyncThunk("register", async (user) => {
  const { username, password, passwordConfirm } = user;
  if (!username) {
    throw new Error("用户名必须指定");
  } else if (username.length < 6) {
    throw new Error("请保证用户名长度大于等于6位");
  } else if (!password) {
    throw new Error("密码不能为空");
  } else if (password !== passwordConfirm) {
    throw new Error("2次密码要一致");
  } else if (password.length < 6) {
    throw new Error("请保证密码长度大于等于6位!");
  } else {
    const response = await reqRegister({ username, password }).catch((e) => {
      throw new Error(e.response.data.msg);
    });
    return response.data;
  }
});

const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {},
  extraReducers: {
    [asyncRegister.pending]: () => {
      console.log("Pending!");
    },
    [asyncRegister.fulfilled]: (state, { payload }) => {
      console.log("Fetched Successfully!");
      return { ...state, redirectTo: "/login" };
    },
    [asyncRegister.rejected]: (state, payload) => {
      Notification.error({
        title: payload.error.message,
        duration: 3,
        position: "top",
      });
      console.log("Rejected!");
    },
  },
});
export default registerSlice.reducer;
