import { reqGetAllList } from "../../api/search";

export default {
  state: {
    traversedata: {
      attrsList: [],
      trademarkList: [],
      goodsList: [],
    }
  },
  getters: {
    attrsList (state) {
      return state.traversedata.attrsList
    },
    goodsList (state) {
      console.log();
      return state.traversedata.goodsList
    },
    trademarkList (state) {
      return state.traversedata.trademarkList
    }

  },
  actions: {
    async getTraversedata ({ commit }, data = {}) {
      console.log(traversedata)
      const traversedata = await reqGetAllList(data)
      commit('GET_ALL_LIAT', traversedata)
    }
  },
  mutations: {
    GET_ALL_LIAT (state, traversedata) {
      state.traversedata = traversedata
    },
  },
};