import Vue from "vue"
import VueRouter from "vue-router"

import Detail from "../views/Detail"
import Home from "../views/Home";
import Login from "../views/Login";
import Register from "../views/Register";
import Search from "../views/Search";
import AddCartSuccess from "../views/AddCartSuccess";
import ShopCart from "../views/ShopCart"
import Pay from "../views/Pay"
import PaySuccess from "../views/PaySuccess"
import Center from "../views/Center"
import Trade from "../views/Trade"
const push = VueRouter.prototype.push;
const replace = VueRouter.prototype.replace;
VueRouter.prototype.push = function (location, onComplete, onAbort) {
  if (onComplete && onAbort) {
    return push.call(this, location, onComplete, onAbort);
  }
  return push.call(this, location, onComplete, () => { });
};
VueRouter.prototype.replace = function (location, onComplete, onAbort) {
  if (onComplete && onAbort) {
    return replace.call(this, location, onComplete, onAbort)
  }
  return replace.call(this, location, onComplete, () => { })
}

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: "/",
      component: Home
    },
    {
      path: "/Login",
      component: Login,
      meta: {
        isFooterHide: true
      }
    },
    {
      path: "/Register",
      component: Register,
      meta: {
        isFooterHide: true
      }
    },
    {
      name: "search",
      path: "/Search/:SearchText?",
      component: Search,
    }, {
      name: "detail",
      path: "/item/:id",
      component: Detail
    }, {
      name: "shopcart",
      path: "/shopcart",
      component: ShopCart
    },
    {
      // 命名路由
      name: "addcartsuccess",
      path: "/addcartsuccess",
      component: AddCartSuccess,
    },
    {
      // 命名路由
      name: "pay",
      path: "/pay",
      component: Pay,
    },
    {
      // 命名路由
      name: "trade",
      path: "/trade",
      component: Trade,
    },
    {
      // 命名路由
      name: "paySuccess",
      path: "/paysuccess",
      component: PaySuccess,
    },
    {
      // 命名路由
      name: "center",
      path: "/center/myorder",
      component: Center,
    },
  ],
  //每次切换路由页面滚动的位置
  scrollBehavior () {
    return { x: 0, y: 0 };
  },
});