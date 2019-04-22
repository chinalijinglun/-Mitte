import request from '../utils/request'

// 添加推送详情
export function addPushDetails(data) {
    return request({
        url: '/push',
        method: 'post',
        data
    })
}
// 过去type类型的数据
export function getType(type) {
    return request({
        url: `/push/type/${type}`,
        method: 'get'
    })
}
// 获取单一push信息
export function getPushDetail(id) {
    return request({
        url: `/push/${id}`,
        method: 'get'
    })
}
// g更新push
export function updatePushDetail(data) {
    return request({
        url: `/push/update/`,
        method: 'post',
        data
    })
}

// 删除push
export function deletePushDetail(data) {
    return request({
        url: `/push/delete/`,
        method: 'post',
        data
    })
}

// 售后列表
export function getOrderList(page) {
    return request({
        url: `/sale/list/`,
        method: 'get',
        params: { page }
    })
}
// 售后人员
export function getUserInfo(id) {
    return request({
        url: `/sale/user`,
        method: 'get',
        params: { id }
    })
}

// 售后关联表
export function getOrderDetail(id) {
    return request({
        url: `/sales`,
        method: 'get',
        params: { id }
    })
}

export function getOrderId(id) {
    return request({
        url: `/sale/order`,
        method: 'get',
        params: { id }
    })
}