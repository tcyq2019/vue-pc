import request from "@utils/request";
//提取订单信息列表
export const reqGetTrade = () => {
  return request({
    method: "GET",
    url: "/order/auth/trade"
  });
};

//提交订单
export const reqSubmitOrder = ({
  tradeNo,
  consignee,
  consigneeTel,
  deliveryAddress,
  paymentWay,
  orderComment,
  orderDetailList,
}) => {
  return request({
    method: "POST",
    url: "/order/auth/submitOrder",
    params: {
      tradeNo
    },
    data: {
      consignee,
      consigneeTel,
      deliveryAddress,
      paymentWay,
      orderComment,
      orderDetailList,
    }
  })
}

export const reqGetQRCode = (orderId) => {
  return request({
    method: "GET",
    url: `/payment/weixin/createNative/${orderId}`
  })
}

export const reqGetPayStatus = (orderId) => {
  return request({
    method: "GET",
    url: `payment/weixin/queryPayStatus/${orderId}`
  })
}
export const reqGetOut = () => {
  return request({
    method: "GET",
    url: `user/passport/logout`
  })
}