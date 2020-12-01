import request from "@utils/request"
import mockRequest from "@utils/mockrequest"

export const reqGetBaseCatgoryList = () => {
  return request({
    method: "GET",
    url: "/product/getBaseCategoryList"
  })
}

//这里获取mock模仿的图片，轮播图数据

export const reqGetBanners = () => {
  return mockRequest({
    method: "GET",
    url: "/banners",
  });
};
export const reqGetfloors = () => {
  return mockRequest({
    method: "GET",
    url: "/floors"
  })
}

