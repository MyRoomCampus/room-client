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
  console.log(username, password, passwordConfirm);
  if (!username) {
    Notification.error({
      title: "用户名必须指定",
      duration: 3,
      theme: "light",
      position: "top",
    });
    throw new Error("用户名必须指定");
  } else if (!password) {
    Notification.error({
      title: "密码不能为空",
      duration: 3,
      theme: "light",
      position: "top",
    });
    throw new Error("密码不能为空");
  } else if (password !== passwordConfirm) {
    Notification.error({
      title: "两次密码要一致!",
      duration: 3,
      theme: "light",
      position: "top",
    });
    throw new Error("2次密码要一致");
  } else {
    const response = await reqRegister({ username, password });
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
      console.log(payload);
      Notification.error({
        title: "该用户名已注册",
        duration: 3,
        position: "top",
      });
      console.log("Rejected!");
    },
  },
});
export default registerSlice.reducer;
