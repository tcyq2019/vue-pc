import axios from "axios";
import { Message } from "element-ui"
import NProgress from "nprogress"
import "nprogress/nprogress.css";
const instance = axios.create({
  baseURL: "/api",
})

instance.interceptors.request.use(
  (config) => {
    return config
  }
);

instance.interceptors.response.use(
  (response) => {
    if (response.data.code === 200) {
      return response.data.data;
    }
    const { message } = response.data;
    Message.error(message)
    return Promise.reject(message)
  },
  (error) => {
    const message = error.message || "网络错误"
    Message.error(message)
    return Promise.reject(message)
  }
)
export default instance
