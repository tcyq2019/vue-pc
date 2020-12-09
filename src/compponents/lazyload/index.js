import Vue from 'vue'
import lazy from "../../assets/lazy/e5c5a65ab841b29606895c1c96fe0d99.gif"
import VueLazyload from 'vue-lazyload'


Vue.use(VueLazyload, {
  loading: lazy
})