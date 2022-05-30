import axios from "axios";

// 修改baseUrl为服务器IP
export const baseUrl = "https://api.saicem.top";

//axios 的实例及拦截器配置
const axiosInstance = axios.create({
  baseURL: baseUrl,
});

axiosInstance.interceptors.response.use(
  (res) => res.data,
  (err) => {
    console.log(err, "网路错误");
  }
);

export { axiosInstance };
