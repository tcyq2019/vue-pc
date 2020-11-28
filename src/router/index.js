import Vue from "vue"
import VueRouter from "vue-router"

import Home from "../views/Home";
import Login from "../views/Login";
import Register from "../views/Register";
import Search from "../views/Search"
const push = VueRouter.prototype.push;
const replace = VueRouter.prototype.replace;
VueRouter.prototype.push = function (location, onComplete, onAvort) {
  if (onComplete && onAvort) {
    return push.call(this, location, onComplete, onAvort)
  }
  return push.call(this, location, onComplete, () => { })
};
VueRouter.prototype.replace = function (location, onComplete, onAvort) {
  if (onComplete && onAvort) {
    return replace.call(this, location, onComplete, onAvort);
  }
  return replace.call(this, location, onComplete, () => { })
};

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: "/",
      component: Home
    },
    {
      path: "/Login",
      component: Login
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
      component: Search
    }
  ],
})