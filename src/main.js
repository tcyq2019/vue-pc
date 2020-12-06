import Vue from 'vue'
import App from './App.vue'
import router from "./router"
Vue.config.productionTip = false
import "./styles/reset.css";
import './plugins/element.js'
import store from "./store"
import "./styles/iconfont.css"
//映入mockjs加载其中代码 
//里面代码一旦加载就会启动mock 服务器，从而拦截相应的请求
import "./mock/mockServer"
import "swiper/swiper-bundle.min.css";
Vue.config.productionTip = false;



new Vue({
  beforeCreate () {
    Vue.prototype.$bus = this
  },
  render: h => h(App),
  router,
  store,
}).$mount('#app')
