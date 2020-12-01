import { reqGetBaseCatgoryList, reqGetBanners, reqGetfloors } from "../../api/home";
export default {
  state: {
    categoryList: [],// 首页三级分类列表数据
    banners: [], //首页轮播图数据
    floors: []
  },
  getters: {},
  actions: {
    async getCatgoryList ({ commit }) {
      const categoryList = await reqGetBaseCatgoryList();
      commit("GET_CATEGORY_LIST", categoryList);
    },
    async getBanners({ commit }) {
      // console.log("actions");
      const banners = await reqGetBanners();
      // 调用commit 同步调用mutation函数
      commit("GET_BANNERS", banners);
    },
    async getfloors ({ commit }) {
      const floors = await reqGetfloors();
      commit('GET_FLOORS', floors)
    }
  },
  mutations: {
    GET_CATEGORY_LIST (state, categoryList) {
      state.categoryList = categoryList;
    },
    GET_BANNERS(state, banners) {
      // console.log("mutation");
      state.banners = banners;
    },
    GET_FLOORS (state, floors) {
      state.floors = floors;
    }
  }
}