import { reqGetBaseCatgoryList } from "../../api/home";

export default {
  state: {
    categoryList: [], // 首页三级分类列表数据
  },
  getters: {},
  actions: {
    async getCatgoryList ({ commit }) {
      const categoryList = await reqGetBaseCatgoryList();
      commit("GET_CATEGORY_LIST", categoryList);
    }
  },
  mutations: {
    GET_CATEGORY_LIST (state, categoryList) {
      state.categoryList = categoryList;
    }
  }
}