import axios from "axios";
import { Message } from "element-ui"
import NProgress from "nprogress"
import "nprogress/nprogress.css";
import getUserTempId from "@utils/getUserTempId"
import store from "../store"
/* 
  userTempId 未登录用户的临id
  通过uuid来生成
  1.生成后要存储起来，
  后端会通过这个id来保存购物车数据如果你有这个id就能得到这个数据
  如果没有就得不到，存储起来将来反复使用
  localstorage永久存储
  sessionstorage回话存储（一旦关闭浏览器数据就会清空）

  2，整体流程
  先读取本地数据 看是否通过localstorage里面有uerstemp
  如果有直接使用,
  3,再内存中缓存一份locastorage数据让其性更好

*/
//这里判断他是开发还是生产环境 生产环境的url必须写全，前面代理会失效
/* const prsfix_url = process.env.NODE_ENV === "development" ? "/" : "http://182.92.128.115/" */
const userTempId = getUserTempId();
const instance = axios.create({
  baseURL: "http://182.92.128.115/api",
});

instance.interceptors.request.use(
  (config) => {
    NProgress.start();
    const token = store.state.user.token;
    if (token) {
      config.headers.token = token
    }
    config.headers.userTempId = userTempId;
    return config
  }
);
instance.interceptors.response.use(
  (response) => {
    NProgress.done();
    if (response.data.code === 200) {
      return response.data.data;
    }
    const { message } = response.data;
    Message.error(message)
    return Promise.reject(message)
  },
  (error) => {
    NProgress.done();
    const message = error.message || "网络错误"
    Message.error(message)
    return Promise.reject(message);
  }
);

export default instance