import request from '../request';
//springboot接口
export function attrList(params,id){
    return request({
        url:`/product/pmsattr/base/list/${id}`,
        params
    })
}
export function attrAdd(params){
    return request({
        url:"/product/pmsattr/save",
        data:params,
        method:"POST"
    })
}
export function attrdDel(params){
    return request({
        url:"/product/pmsbrand/delete",
        data:params,
        method:"POST"
    })
}
export function attrLoad(params){
    return request({
        url:`/product/pmsattr/info/${params}`,
        
    })
}
export function attrUpdate(params){
    return request({
        url:`/product/pmsattr/update`,
        data:params,
        method:"POST"
    })
}