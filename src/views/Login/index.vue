<template>
  <div class="login">
    <div class="login-warp">
      <div class="login-context">
        <div class="loginfrom">
          <ul class="tab clearFix">
            <li>
              <a href="##" style="border-right: 0">扫描登陆</a>
            </li>
            <li>
              <a href="##" class="current">账户登陆 </a>
            </li>
          </ul>
          <div class="content">
            <div>
              <div class="input-text clearFix">
                <span></span>
                <input type="text" placeholder="邮箱/用户名/手机号" />
              </div>
              <div class="input-text clearFix">
                <span class="pwd"></span>
                <input type="text" placeholder="请输入密码" />
              </div>
              <div class="setting clearFix">
                <label class="checkbox inline">
                  <input type="checkbox" value="2" name="m1" checked="" />
                  自动登陆
                </label>
                <span class="forget">忘记密码？</span>
              </div>
              <el-button class="btn" @click="loginbtn" type="primary">登&nbsp;&nbsp;陆</el-button>
            </div>
            <div class="call clearFix">
              <ul>
                <li><img src="../../images/images/qq.png" alt="" /></li>
                <li><img src="../../images/images/sina.png" alt="" /></li>
                <li><img src="../../images/images/ali.png" alt="" /></li>
                <li><img src="../../images/images/weixin.png" alt="" /></li>
              </ul>
              <router-link class="register" to="/Register"></router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reqLogin } from "@api/user.js"
export default {
  name: 'login',
  methods: {
    loginbtn() {
      reqLogin("137000000000","111111")
      .then((res)=>{
        console.log("res",res)
      })
      .catch((err)=>{
        console.log("err",err)
      })
    },
  },
}
</script>

<style lang="less" scoped>
.login-warp {
  height: 487px;
  background-color: #e93854;
}
.login-context {
  width: 1200px;
  height: 487px;
  margin: 0 auto;
  background: url('../../images/loginbg.png') no-repeat;
}
.loginfrom {
  border: 1px solid;
  width: 420px;
  height: 400px;
  padding: 20px;
  background-color: #fff;
  right: 0px;
  top: 45px;
  float: right;
}
.tab li {
  width: 50%;
  float: left;
  text-align: center;
}
.tab li a {
  display: block;
  height: 50px;
  line-height: 50px;
  font-size: 20px;
  font-weight: 700;
  color: #333;
  border: 1px solid #ddd;
  box-sizing: border-box;
  text-decoration: none;
}
.tab li .current {
  border-bottom: none;
  border-top-color: #28a3ef;
  color: #e1251b;
}
.content {
  width: 420px;
  height: 316px;
  box-sizing: border-box;
  border: 1px solid #ddd;
  border-top: none;
  padding: 18px;
}
form {
  margin: 15px 0 18px 0;
  font-size: 12px;
  line-height: 18px;
}
.input-text {
  margin-bottom: 16px;
}
span {
  float: left;
  width: 37px;
  height: 32px;
  border: 1px solid #ccc;
}
</style>