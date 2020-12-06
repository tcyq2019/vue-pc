import { reqGetDetail } from "@api/detail";

export default {
  state: {
    productDetail: {
      categoryView: {},//分类数据
      spuSaleAttrList: [],//商品选择属性列表
      skuInfo: {
        skuImageList: [],//这里的空数组是为了后面哪里将数据传给大图时 刚刚开始数据没拿到而定义的index 会报错 提前给它安排个空数组就不会报错
      }//商品详情数据
    }
  },
  getters: {
    categoryView (state) {
      return state.productDetail.categoryView
    },
    skuInfo (state) {
      return state.productDetail.skuInfo
    },
    spuSaleAttrList (state) {
      return state.productDetail.spuSaleAttrList
    }
  },
  actions: {
    async GetDetail ({ commit }, id) {
      const productDetail = await reqGetDetail(id)
      commit("GET_DETAIL", productDetail)
    }
  },
  mutations: {
    GET_DETAIL (state, productDetail) {
      state.productDetail = productDetail
    }
  },
}