import request from '../utils/request'

// 添加推送详情
export function addPushDetails(data) {
    return request({
        url: '/push',
        method: 'post',
        data
    })
}

export function getType(type) {
    return request({
        url: `/push/type/${type}`,
        method: 'get'
    })
}

// 售后列表
export function getOrderList() {
    return request({
        url: `/sale/list/`,
        method: 'get'
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