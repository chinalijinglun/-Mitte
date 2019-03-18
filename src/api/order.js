import request from '../utils/request'

//修改品牌
export function updateBrandReq() {
  return request({
    url: '/updateBrand',
    method: 'post',
    data:{}
  })
}

//添加品牌
export function creatBrandReq() {
  return request({
    url: '/creatBrand',
    method: 'post',
    data:{}
  })
}
//获取品牌列表
export function getBrandReq() {
  return request({
    url: '/getBrand',
    method: 'get'
  })
}
//添加二级品类
export function createCategorySecondReq() {
  return request({
    url: '/createCategorySecond',
    method: 'post',
    data:{  }
  })
}
//修改二级品类
export function updateCategorySecondReq(id) {
  return request({
    url: '/updateCategorySecond',
    method: 'post',
    data:{  }
  })
}

//根据id获取二级品类
export function getCategorySecondReq(id) {
  return request({
    url: '/getCategorySecond',
    method: 'get',
    params:{ id }
  })
}
//获取一级品类
export function updateCategoryFirstReq() {
  return request({
    url: '/updateCategoryFirst',
    method: 'post',
    data:{}
  })
}
//修改一级品类
export function getCategoryFirstReq() {
  return request({
    url: '/getCategoryFirst',
    method: 'get'
  })
}
//添加一级品类

export function createCategoryFirstReq() {
  return request({
    url: '/getCategoryFirst',
    method: 'post',
    data:{}
  })
}

//根据type获取订单列表 1待发货 2已发货 3已完成
export function getOrderListReq(type) {
  return request({
    url: '/getOrderList',
    method: 'get',
    params:{ type }
  })
}
//根据订单id获取所包含的商品信息
export function getOrderDetailReq(id) {
  return request({
    url: '/getOrderDetail',
    method: 'get',
    params: { id }
  })
}
//根据用户id获取用户信息
export function getUserInfoReq(id) {
  return request({
    url: '/getUserInfo',
    method: 'post',
    params:{ id }
  })
}
