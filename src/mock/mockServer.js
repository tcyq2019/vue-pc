import Mock from "mockjs"
import rbanners from "./rbanners.json"

Mock.mock('/mock/banners', 'get', {
  code: 200,
  "data|4": rbanners,
})