import { axiosInstance } from "./config";

export const getMusicList = () => {
  return axiosInstance.get("/user/record?uid=45441555&type=1");
};
