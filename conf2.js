// 自定义模块3 导出配置
let rate;
function rmbToDollarNew(rmb){
    return rmb/rate
}

module.exports = function(r){
    rate=r;
    return {rmbToDollarNew}
}