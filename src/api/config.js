import axios from "axios";

// export const baseUrl = "https://api.saicem.top";
export const baseUrl = "https://localhost:5000";

/**
 * get请求
 * @method get
 * @param {url, params, loading} 请求地址，请求参数，是否需要加载层
 */
export const get = function (url, params = {}) {
  url = baseUrl + url;
  let paramStr = "";
  Object.keys(params).forEach((key) => {
    paramStr += key + "=" + params[key] + "&";
  });
  if (paramStr) {
    paramStr = paramStr.substring(0, paramStr.length - 1);
  }
  return axios.get(url + "?" + paramStr);
};


/**
 * post请求
 * @method post
 * @param {url, params} 请求地址，请求参数，是否需要加载层
 */
export const post = function (url, data) {
  url = baseUrl + url;
  return axios({
    method: "POST",
    url: url,
    data: data,
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};
