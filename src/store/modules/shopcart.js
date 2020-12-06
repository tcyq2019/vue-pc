import {
  reqGetCartList,
  reqUpdateCartCount,
  reqUpdateCartCheck,
  //reqDelCart
} from "@api/shopcart"
export default {
  state: {
    cartList: [],//所有购物车数据

  },
  getters: {},
  actions: {
    async getCartList ({ commit }) {
      const cartList = await reqGetCartList();
      commit("GET_CART_LIST", cartList);
    },
    async updateCartCount ({ commit }, { skuId, skuNum }) {
      console.log(222)
      await reqUpdateCartCount(skuId, skuNum);
      // 1. 手动更新vuex的数据 --> 页面就会重新渲染
      // 2. 重新请求所有购物车数据
      commit("UPDATE_CART_COUNT", { skuId, skuNum });
    },
    async updateCartCheck ({ commit }, { skuId, isChecked }) {
      //这里发送请求是为了更新服务器的数据
      //因为更新购物车页面的数据是服务器所提供的
      await reqUpdateCartCheck(skuId, isChecked);
      console.log(commit)

    },
  },
  mutations: {
    GET_CART_LIST (state, cartList) {
      state.cartList = cartList;
    },
    /*  UPDATE_CARTCOUNT (state, CartCount) {
       state.carList = carList
     }, */

    UPDATE_CART_COUNT (state, { skuId, skuNum }) {
      console.log(111)
      state.cartList = state.cartList.map((cart) => {
        if (cart.skuId === skuId) {
          cart.skuNum += skuNum;
        }
        return cart;
      });
    },

  }
}