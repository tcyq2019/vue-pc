<template>
  <div class="cart">
    <h4>全部商品</h4>
    <div class="cart-main">
      <div class="cart-th">
        <div class="cart-th1">全部</div>
        <div class="cart-th2">商品</div>
        <div class="cart-th3">单价（元）</div>
        <div class="cart-th4">数量</div>
        <div class="cart-th5">小计（元）</div>
        <div class="cart-th6">操作</div>
      </div>
      <div class="cart-body">
        <ul class="cart-list" v-for="cart in cartList" :key="cart.id">
          <li class="cart-list-con1">
            <input
              type="checkbox"
              name="chk_list"
              :checked="isDone"
              
                        />
          </li>
          <li class="cart-list-con2">
            <img :src="cart.imgUrl" />
            <div class="item-msg">
              {{ cart.skuName }}
            </div>
          </li>
          <li class="cart-list-con4">
            <span class="price">{{ cart.skuPrice }}</span>
          </li>
          <li class="cart-list-con5">
            <!-- 需要判断其数量 加和减都不能 超过限额范围 所有后面将cart.skuNum传入
            其中用来判断，或者可以最直接使用:disabled 来当其数量的加减到达限额后，
            直接禁用
             -->
            <button
              @click="updateCount(cart.skuId, -1,cart.skuNum)"
              class="mins"
              :disabled="cart.skuNum === 1"
            >
              -
            </button>
            <input
              autocomplete="off"
              type="text"
              :value="cart.skuNum"
              minnum="1"
              class="itxt"
              @blur="update(cart.skuId, cart.skuNum, $event)"
              @input="formmatSkuNum"
            />
            <!-- 这里给input绑的blur失去焦点事件 为了 在你直接修改数量后更新数据 
            里面可以传参 传入商品的id 和商品的数量，和event事件，这里面要加上$
            这里绑定input事件 是为了格式化数据的formmatSkuNum
            -->
            <button
              @click="updateCount(cart.skuId, 1,cart.skuNum)"
              class="plus"
              :disabled="cart.skuNum === 10"
            >
              +
            </button>
          </li>
          <li class="cart-list-con6">
            <span class="sum">{{ cart.skuNum * cart.skuPrice }}</span>
          </li>
          <li class="cart-list-con7">
            <a href="#none" class="sindelet" @click="onDelCart(cart.skuId)"
              >删除</a
            >
            <br />
            <a href="#none">移到收藏</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="cart-tool">
      <div class="select-all">
        <input class="chooseAll" type="checkbox"  />
        <span>全选</span>
      </div>
      <div class="option">
        <a href="#none">删除选中的商品</a>
        <a href="#none">移到我的关注</a>
        <a href="#none">清除下柜商品</a>
      </div>
      <div class="money-box">
        <div class="chosed">
          已选择 <span>{{ total }}</span
          >件商品
        </div>
        <div class="sumprice">
          <em>总价（不含运费） ：</em>
          <i class="summoney">{{ totalPrice }}</i>
        </div>
        <div class="sumbtn" >
          <router-link class="sum-btn" to="/trade" target="_blank">结算</router-link >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'ShopCart',
  data() {
    return {
      alltodo: false,
      isDone: 1,
    }
  },
  computed: {
    ...mapState({
      cartList: (state) => state.shopcart.cartList,
    }),
    // 商品总数
    total() {
      return this.cartList
        .filter((cart) => cart.isChecked === 1)
        .reduce((p, c) => p + c.skuNum, 0)
    },
    // 商品总价
    totalPrice() {
      return this.cartList
        .filter((cart) => cart.isChecked === 1)
        .reduce((p, c) => p + c.skuNum * c.skuPrice, 0)
    },
  },
  methods: {
    ...mapActions(['getCartList', 'updateCartCount', 'delCart']),
    // 更新商品数量
    async updateCount(skuId, skuNum) {
      // 更新商品
      await this.updateCartCount({ skuId, skuNum })
      // 刷新页面
      // this.getCartList();
    },
    //删除商品
    async onDelCart(skuId) {
      if (window.confirm`您确认删除此数据吗？`)
        await this.delCart(skuId), this.getCartList()
    },
    formmatSkuNum(e) {
      //这里是为了上面的input格式化，因为直接输入修改数量 会输入空格和字母
      //这步式为了取出这些
      //正则方法匹配 replace会替换掉，符合正则表达里面的数据为"",\D是匹配所有非数字
      let skuNum = +e.target.value.replace(/\D+/g, '')
      if (skuNum < 1) {
        //这里判断 其skuNum 不小于1，不然判断会没有意义
        skuNum = 1
      } else if (skuNum > 10) {
        skuNum = 10
        //这里的10是给它临时设置的一个，后台总数，意思是总数不能超过
      }
      e.target.value = skuNum
      //最后把skuNum在还给e.target.value ，也就是表单里面的value
    },
    update(skuId, skuNum, e) {
      //这里写上加让其成为正数的number类型
      if (+e.target.value === skuNum) {
        return
      }
      //这里的e.target.value减去skuNum 就是需要传进去updateCartCount去更新请求的次数例如：原本有值5，后输入6，那么5就是已经更新过
      //的值，e.target 获取到你新输入的6 去1减去已经 加载过的5 就是需要再去更新的次数skuNum
      this.updateCartCount({ skuId, skuNum: e.target.value - skuNum })
    },
  },
  mounted() {
    this.getCartList()
  },
}
</script>

<style lang="less" scoped>
.cart {
  width: 1200px;
  margin: 0 auto;

  h4 {
    margin: 9px 0;
    font-size: 14px;
    line-height: 21px;
  }

  .cart-main {
    .cart-th {
      background: #f5f5f5;
      border: 1px solid #ddd;
      padding: 10px;
      overflow: hidden;

      & > div {
        float: left;
      }

      .cart-th1 {
        width: 25%;

        input {
          vertical-align: middle;
        }

        span {
          vertical-align: middle;
        }
      }

      .cart-th2 {
        width: 25%;
      }

      .cart-th3,
      .cart-th4,
      .cart-th5,
      .cart-th6 {
        width: 12.5%;
      }
    }

    .cart-body {
      margin: 15px 0;
      border: 1px solid #ddd;

      .cart-list {
        padding: 10px;
        border-bottom: 1px solid #ddd;
        overflow: hidden;

        & > li {
          float: left;
        }

        .cart-list-con1 {
          width: 4.1667%;
        }

        .cart-list-con2 {
          width: 25%;

          img {
            width: 82px;
            height: 82px;
            float: left;
          }

          .item-msg {
            float: left;
            width: 150px;
            margin: 0 10px;
            line-height: 18px;
          }
        }

        .cart-list-con3 {
          width: 20.8333%;

          .item-txt {
            text-align: center;
          }
        }

        .cart-list-con4 {
          width: 12.5%;
        }

        .cart-list-con5 {
          width: 12.5%;

          .mins {
            border: 1px solid #ddd;
            border-right: 0;
            float: left;
            color: #666;
            width: 6px;
            text-align: center;
            padding: 8px;
          }

          input {
            border: 1px solid #ddd;
            width: 40px;
            height: 33px;
            float: left;
            text-align: center;
            font-size: 14px;
          }

          .plus {
            border: 1px solid #ddd;
            border-left: 0;
            float: left;
            color: #666;
            width: 6px;
            text-align: center;
            padding: 8px;
          }
        }

        .cart-list-con6 {
          width: 12.5%;

          .sum {
            font-size: 16px;
          }
        }

        .cart-list-con7 {
          width: 12.5%;

          a {
            color: #666;
          }
        }
      }
    }
  }

  .cart-tool {
    overflow: hidden;
    border: 1px solid #ddd;

    .select-all {
      padding: 10px;
      overflow: hidden;
      float: left;

      span {
        vertical-align: middle;
      }

      input {
        vertical-align: middle;
      }
    }

    .option {
      padding: 10px;
      overflow: hidden;
      float: left;

      a {
        float: left;
        padding: 0 10px;
        color: #666;
      }
    }

    .money-box {
      float: right;

      .chosed {
        line-height: 26px;
        float: left;
        padding: 0 10px;
      }

      .sumprice {
        width: 200px;
        line-height: 22px;
        float: left;
        padding: 0 10px;

        .summoney {
          color: #c81623;
          font-size: 16px;
        }
      }

      .sumbtn {
        float: right;

        a {
          display: block;
          position: relative;
          width: 96px;
          height: 52px;
          line-height: 52px;
          color: #fff;
          text-align: center;
          font-size: 18px;
          font-family: 'Microsoft YaHei';
          background: #e1251b;
          overflow: hidden;
        }
      }
    }
  }
}
</style>