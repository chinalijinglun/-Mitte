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