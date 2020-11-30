import { reqGetBaseCatgoryList,reqGetbanners } from "../../api/home";
export default {
  state: {
    categoryList: [],// 首页三级分类列表数据
    banners: [] //首页轮播图数据
  },
  getters: {},
  actions: {
    async getCatgoryList ({ commit }) {
      const categoryList = await reqGetBaseCatgoryList();
      commit("GET_CATEGORY_LIST", categoryList);
    },
    async getbanners ({ commit }) {
      const banners = await reqGetbanners();
      commit('GET_BANNERS', banners)
    }
  },
  mutations: {
    GET_CATEGORY_LIST (state, categoryList) {
      state.categoryList = categoryList;
    },
    GET_BANNERS (state, banners) {
      state.banners = banners;
    }
  }
}