import Vue from "vue"
import VueRouter from "vue-router"
import store from "../store"

/* import Detail from "../views/Detail"
import Home from "../views/Home";
import Login from "../views/Login";
import Register from "../views/Register";
import Search from "../views/Search";
import AddCartSuccess from "../views/AddCartSuccess";
import ShopCart from "../views/ShopCart"
import Pay from "../views/Pay"
import PaySuccess from "../views/PaySuccess"
import Center from "../views/Center"
import Trade from "../views/Trade" */

//路由懒加载 
//1会将路由组件打包成单独的js文件 （webpack代码分割）
//2异步加载路由组件（需要使用加载）（Vue异步加载组件功能）
const Detail = () =>import(/* webpackChunkName:"Detail" */"../views/Detail")
const Home = () =>import(/* webpackChunkName:"Home" */ "../views/Home")
const Login = () =>import(/* webpackChunkName:"Login" */"../views/Login")
const Register = () =>import(/* webpackChunkName:"Register" */"../views/Register")
const Search = () =>import(/* webpackChunkName:"Search" */"../views/Search")
const AddCartSuccess = () =>import(/* webpackChunkName:"AddCartSuccess" */"../views/AddCartSuccess")
const Pay = () =>import(/* webpackChunkName:"Pay" */"../views/Pay")
const PaySuccess = () =>import(/* webpackChunkName:"PaySuccess" */"../views/PaySuccess")
const Center = () =>import(/* webpackChunkName:"Center" */"../views/Center")
const Trade = () =>import(/* webpackChunkName:"Trade" */"../views/Trade")
const ShopCart = () =>import(/* webpackChunkName:"Trade" */"../views/ShopCart")
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

  const router = new VueRouter({
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
  /* 
  路由守卫
    1是什么
    在路由跳转之前，之中，之后触发的钩子函数（类似于生命周期）
    2分类
    全局守卫
    全局前置守卫：在切换路由之前触发
    beforeEach
    全局解析守卫：之中
    beforeResolve
    全局后置守卫：之后
    afterEach
    路由组件
    组件守卫
  */
  //需要权限验证的地址
  const permissionPaths = ["/trade", "/pay", "/center"]
  router.beforeEach((to, from, next) => {
    /* 
    to  要去的路由对象
     from 从哪来的路由对象（当前路由对象）（$route）
     next 是一个函数:跳转到那个路由的方法
        比如：要去to这个路由next（）
            要去登陆路由 next("/login") next({path:"/login"})
            next({name:"login"})
  
      权限验证：
          如果用户为登陆，不允许去 trade pay center等路由
      }
    */
    //判断permissionPaths里面是不是包含了 要去的路径 并且判断当前情况有没有登陆
    //没有登陆就不会有请求到的token ，没有的话 就直接跳转到login先登陆
    if (permissionPaths.indexOf(to.path) > -1 && !store.state.user.token) {
      return next("/login");
    }
    next();
  })
  export default router