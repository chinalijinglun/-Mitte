import request from '../utils/request'

//修改品牌
export function updateBrandReq(data) {
  return request({
    url: '/updateBrand',
    method: 'post',
    data
  })
}

export function updateBrandShowReq(data) {
  return request({
    url:'/updateBrandShow',
    method:'post',
    data:data
  })
}

//添加品牌
export function creatBrandReq(data) {
  return request({
    url: '/creatBrand',
    method: 'post',
    data
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
export function createCategorySecondReq(data) {
  return request({
    url: '/createCategorySecond',
    method: 'post',
    data
  })
}
//修改二级品类
export function updateCategorySecondReq(data) {
  return request({
    url: '/updateCategorySecond',
    method: 'post',
    data
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
//修改一级品类
export function updateCategoryFirstReq(data) {
  return request({
    url: '/updateCategoryFirst',
    method: 'post',
    data
  })
}
//获取一级品类
export function getCategoryFirstReq() {
  return request({
    url: '/getCategoryFirst',
    method: 'get'
  })
}
//添加一级品类
export function createCategoryFirstReq(data) {
  return request({
    url: '/createCategoryFirst',
    method: 'post',
    data
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
//根据id修改订单状态
export function updateOrderStatus(data) {
  return request({
    url:'/updateOrderStatus',
    method:'post',
    data
  })
}
//根据id把已完成订单转到售后
export function toSaleBack(data) {
  return request({
    url:'/toSaleBack',
    method:'post',
    data
  })
}
//根据用户id获取用户信息
export function getUserInfoReq(id) {
  return request({
    url: '/getUserInfo',
    method: 'get',
    params:{ id }
  })
}
//根据type获取商品列表
export function getShopListReq(type) {
  return request({
    url: '/getShopList',
    method: 'get',
    params:{ type }
  })
}
//商品api
//添加商品获取品类列表
export function getCategoryNamesReq() {
  return request({
    url:'/getCategoryNames',
    method:'get'
  })
}
//获取品牌名列表
export function getBrandNamesReq() {
  return request({
    url:'/getBrandNames',
    method:'get'
  })
}
//添加商品
export function createShopReq(data) {
  return request({
    url:'/createShop',
    method:'post',
    data
  })
}
