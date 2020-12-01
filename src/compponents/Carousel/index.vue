<template>
  <div class="swiper-container" ref="swiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for=" carpuse in carpuseList" :key="carpuse.id">
        <img :src="carpuse.imgUrl" />
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>

    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>

<script>
import Swiper, { Navigation, Pagination, Autoplay } from 'swiper'
import 'swiper/swiper-bundle.min.css'
Swiper.use([Navigation, Pagination, Autoplay])
export default {
  name: 'Carousel',
  props: {
    carpuseList: {
      type: Array,
      required: true,
    },
  },
  watch: {
    carpuseList() {
      //[] 最终的数据，数据发生变化才会触发
      //轮播图dom 元素渲染完成  轮播图数据
      //watch是为了确保有轮播图数据
      //this.$nextTick为了确保轮播图数据已经渲染成dom元素
      //确保swiper不能new多次
      if (this.swiper) return
      this.$nextTick(() => {
        this.initSwiper();
      });
    },
  },
  methods:{
    initSwiper(){
      this.swiper = new Swiper(this.$refs.swiper, {
          loop: true,
          autoplay: {
            delay: 2000,
            disableOnInteraction: false,
          },
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-botton-prev',
          },
        })
    },
  },
  mounted(){
    if(!this.carpuseList.length)return;
    this.initSwiper()
    console.log(this.carpuseList)
  }
}
</script>

<style>
</style>
