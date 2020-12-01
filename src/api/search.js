import request from "@utils/request";

export const reqGetAllList = (data) => {
  return request({
    method: "POST",
    url: "/list",
    data,
  });
}