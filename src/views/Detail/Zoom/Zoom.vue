<template>
  <div class="spec-preview">
    <img :src="imgUrl" />
    <div class="event" @mousemove="move"></div>
    <div class="big">
      <img :style="{ left: bleft + 'px', top: xtop + 'px' }" :src="bigimgUrl" />
    </div>
    <div class="mask" :style="{ left: xleft + 'px', top: xtop + 'px' }"></div>
  </div>
</template>

<script>
export default {
  name: 'Zoom',
  data() {
    return {
      xleft: 0,
      xtop: 0,
      bleft: 0,
      btop: 0,
    }
  },
  props: {
    bigimgUrl: String,
    imgUrl: String,
  },
  methods: {
    move(e) {
      // console.log(e)
      this.xleft = e.offsetX - 100
      this.xtop = e.offsetY - 100
      console.log(this.xtop, this.xleft)
      this.bleft = -2 * this.xleft
      this.btop = -2 * this.btop
      this.xleft = this.xleft < 0 ? (this.xleft = 0) : this.xleft
      this.xleft = this.xleft > 200 ? (this.xleft = 200) : this.xleft
      this.xtop = this.xtop < 0 ? (this.xtop = 0) : this.xtop
      this.xtop = this.xtop > 200 ? (this.xtop = 200) : this.xtop
    },
  },
}
</script>

<style lang="less">
.spec-preview {
  position: relative;
  width: 400px;
  height: 400px;
  border: 1px solid #ccc;

  img {
    width: 100%;
    height: 100%;
  }

  .event {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 998;
  }

  .mask {
    width: 50%;
    height: 50%;
    background-color: rgba(0, 255, 0, 0.3);
    position: absolute;
    left: 0;
    top: 0;
    display: none;
  }

  .big {
    width: 100%;
    height: 100%;
    position: absolute;
    top: -1px;
    left: 100%;
    border: 1px solid #aaa;
    overflow: hidden;
    z-index: 998;
    display: none;
    background: white;

    img {
      width: 200%;
      max-width: 200%;
      height: 200%;
      position: absolute;
      left: 0;
      top: 0;
    }
  }

  .event:hover ~ .mask,
  .event:hover ~ .big {
    display: block;
  }
}
</style>