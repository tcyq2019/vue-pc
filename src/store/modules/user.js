import { reqRegister, reqLogin } from "../../api/user"
export default {
    state: {
      name: localStorage.getItem("name") || "",
      token: localStorage.getItem("token") || ""
    
  },
  getters: {},
  actions: {
    async register ({ commit }, { phone, password, code }) {
      await reqRegister({ phone, password, code });
      console.log(commit)
    },
    async login ({ commit }, { phone, password }) {
      const user = await reqLogin(phone, password);
      commit("REQ_OGIN", user)
    }
  },
  //在外面页面dispatch（"login",xxx,xxx）请求后将token和name 更新到state数据上可以
  //给外面登陆界面使用
  mutations: {
    REQ_OGIN (state, user) {
      state.name = user.name;
      state.token = user.token
    }
  }
}