import request from "@utils/request"

export const reqGetBaseCatgoryList = () => {
  return request({
    method: "GET",
    url: "/product/getBaseCategoryList"
  })
}

