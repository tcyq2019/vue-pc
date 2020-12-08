<template>
  <div class="hearder">
    <div class="hearder-Top">
      <div class="hearder-Container">
        <div class="hearder-LoginList">
          <p>京西商城欢迎您</p>
          <p v-if="$store.state.user.name">
            <span>{{ $store.state.user.name }}</span>
            &nbsp;
            <button @click="allOut">退出</button>
          </p>
          <p v-else>
            <span>请</span>
            <router-link to="/Login">登陆</router-link>
            <router-link to="/Register" class="register">免费注册</router-link>
          </p>
        </div>
        <div class="hearder-typeList">
          <router-link to="/trade">我的订单</router-link>
          <router-link to="/shopcart">我的购物车</router-link>
          <a href="###">我的京西</a>
          <a href="###">京西会员</a>
          <a href="###">企业采购</a>
          <a href="###">关注京西商城</a>
          <a href="###">合作招商</a>
          <a href="###" id="lasta">商家后台</a>
        </div>
      </div>
    </div>
    <div class="hearder-buttom">
      <h1 class="hearder-logoArea">
        <router-link to="/">
          <img src="./images/logo.png" />
        </router-link>
      </h1>
      <div class="hearder-searchArea">
        <div class="hearder-searchFrom">
          <input
            type="text"
            id="autocomplete"
            class="input-error input-xxlarge"
            placeholder="请输入您想要的商品"
            v-model="SearchText"
          />
          <button
            class="sui-btn btn-xlarge btn-danger"
            type="button"
            @click="onSearch"
          >
            搜索
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reqGetOut } from '../../api/pay'
export default {
  name: 'hearder',
  data() {
    return {
      SearchText: '',
    }
  },
  methods: {
    onSearch() {
      const { SearchText } = this
      const location = {
        name: 'search', //使用命名路由
      }
      if (SearchText) {
        location.params = {
          SearchText,
        }
      }

      if (SearchText) {
        location.params = {
          SearchText,
        }
      }
      const { categoryName } = this.$route.query
      if (categoryName) {
        location.query = this.$route.query
      }

      if (this.$route.name === 'search') {
        this.$router.replace(location)
      } else {
        this.$router.push(location)
      }
    },
    async allOut() {
      const result = await reqGetOut()
      localStorage.removeItem('token')
      localStorage.removeItem('name')
      this.$store.state.user.name = result
      this.$store.state.user.token = result
    },
  },
  mounted() {
    this.$bus.$on('clearKeyWord', () => {
      this.SearchText = ''
    })
  },
}
</script>

<style lang="less" scoped>
.hearder-Container {
  width: 1200px;
  margin: 0 auto;
  overflow: hidden;
}
.hearder-LoginList {
  float: left;
}
.hearder-LoginList > p {
  float: left;
  margin-right: 10px;
}
.hearder-LoginList > p > .register {
  border-left: 1px solid #b3aeae;
  padding: 0 5px;
  margin-left: 5px;
}
.hearder-typeList {
  float: right;
}
.hearder-typeList > a {
  border-right: 1px solid #b3aeae;
  margin-left: 15px;
  padding-right: 15px;
}
.hearder-typeList > a:hover {
  color: pink;
}
#lasta {
  border-right: white;
}
.hearder-Top {
  background-color: #eaeaea;
  height: 30px;
  line-height: 30px;
}
.hearder-buttom {
  width: 1200px;
  margin: 0 auto;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
}

.hearder-logoArea {
  margin-top: 35px;
}
.hearder-logoArea > img {
  width: 175px;
  margin: 25px 45px;
}
.hearder-searchArea {
  margin-top: 35px;
}
.hearder-searchFrom {
  overflow: hidden;
}
.hearder-searchFrom > input {
  box-sizing: border-box;
  width: 490px;
  height: 32px;
  padding: 0 4px;
  border: 2px solid #ea4a36;
  outline: none;
}
.hearder-searchFrom > button {
  height: 32px;
  width: 68px;
  background-color: #ea4a36;
  border: none;
  color: #fff;
  cursor: pointer;
  outline: none;
  padding-top: 1px;
}
</style>