import Vue from "vue"
import VueRouter from "vue-router"

import Detail from "../views/Detail"
import Home from "../views/Home";
import Login from "../views/Login";
import Register from "../views/Register";
import Search from "../views/Search"
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
      name:"detail",
      path: "/item/:id",
      component: Detail
    }
  ],
  //每次切换路由页面滚动的位置
  scrollBehavior () {
    return { x: 0, y: 0 };
  },
});