import { get, post } from "./config";
import axios from "axios";

export const getMusicList = (data) => {
  console.log("qwe");
  return get("/user/record", data);
};

/*
包含了n个接口请求的函数的模块
函数返回值为: promise
 */

// 注册接口
export const reqRegister = (user) => post("/auth/register", user);

// 登陆接口
export const reqLogin = ({ username, password }) =>
  post("/auth/login", { username, password });

// 更新用户接口
export const reqUpdateUser = (user) => post("/update", user);

// 获取用户信息
export const reqUser = () => get("/user");

// 获取一页房屋列表
export const getBatchHouseList = (params) => get("/house", params);

// 根据id获取活动页的json描述
export const getJsonById = (params) => get("/json", params);

// 根据id获取房屋info
export const getHouseInfo = (id) => get(`/house/${id}`);

// 根据id获取活动页的json描述(fake)
export const getJsonByIdFake = (id) => {
  return axios.get(`http://127.0.0.1:4523/mock/956653/course/${id}`);
};

// 修改用户密码
export const changePassword = (params) => {
  const token = localStorage.getItem("ROOM_JWT_TOKEN_KEY");
  return axios({
    method: "PUT",
    url: "https://api.saicem.top/user/password",
    data: params,
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    },
  });
};
