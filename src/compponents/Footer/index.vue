<template>
  <div class="footer">
    <div class="footer-content">
      <dl>
        <dt><a href="###">购物指南</a></dt>
        <dd><a href="###">购物流程</a></dd>
        <dd><a href="###">会员介绍</a></dd>
        <dd><a href="###">生活旅行/团购</a></dd>
        <dd><a href="###">常见问题</a></dd>
        <dd><a href="###">购物指南</a></dd>
      </dl>
      <dl>
        <dt><a href="###">配送方式</a></dt>
        <dd><a href="###">上门自提</a></dd>
        <dd><a href="###">211限时达</a></dd>
        <dd><a href="###">配送服务查询</a></dd>
        <dd><a href="###">配送费收取标准</a></dd>
        <dd><a href="###">海外配送</a></dd>
      </dl>
      <dl>
        <dt><a href="###">支付方式</a></dt>
        <dd><a href="###">货到付款</a></dd>
        <dd><a href="###">在线支付</a></dd>
        <dd><a href="###">分期付款</a></dd>
        <dd><a href="###">邮局汇款</a></dd>
        <dd><a href="###">公司转账</a></dd>
      </dl>
      <dl>
        <dt><a href="###">售后服务</a></dt>
        <dd><a href="###">售后政策</a></dd>
        <dd><a href="###">价格保护</a></dd>
        <dd><a href="###">退款说明</a></dd>
        <dd><a href="###">返修/退换货</a></dd>
        <dd><a href="###">取消订单</a></dd>
      </dl>
      <dl>
        <dt><a href="###">特色服务</a></dt>
        <dd><a href="###">夺宝岛</a></dd>
        <dd><a href="###">DIY装机</a></dd>
        <dd><a href="###">延保服务</a></dd>
        <dd><a href="###">尚品汇E卡</a></dd>
        <dd><a href="###">尚品汇通信</a></dd>
      </dl>
      <dl>
        <dt><a href="###">帮助中心</a></dt>
        <dd>
          <a href="###"><img src="../../images/wx_cz.jpg" alt="" /></a>
        </dd>
      </dl>
    </div>
    <div class="footer-buttom">
      <div class="buttom-context">
        <ul class="context">
          <li>关于我们</li>
          <li>联系我们</li>
          <li>商家入驻</li>
          <li>友情链接</li>
          <li>营销中心</li>
          <li>洗脚按摩</li>
          <li>招摇撞骗</li>
          <li>无精打采</li>
          <li>夜夜笙歌</li>
          <li id="lastno">不讲武德</li>
        </ul>
      </div>
      <div class="buttom-dizhi">地址：北京市昌平区宏福科技园综合楼6层</div>
      <div class="buttom-beihao">京ICP备19006430号</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
}
</script>

<style>
.footer {
  background-color: #ccc;
  height: 320px;
  padding: 20px;
  bottom: 0px;
}
.footer-content {
  display: flex;
  justify-content: space-around;
  width: 1200px;
  margin: 0 auto;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  margin-top: 20px;
}
dt {
  font-weight: 700;
  font-size: 15px;
}

.context {
  display: flex;
  justify-content: center;
}
.context > li {
  padding-right: 10px;
  border-right: 1px solid rgba(0, 0, 0, 1);
  margin-left: 10px;
}
.footer-buttom {
  margin-top: 15px;
  text-align: center;
}
#lastno {
  border-right: rgba(0, 0, 0, 0);
}
</style>