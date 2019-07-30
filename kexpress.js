const http = require('http');
const url = require('url');

// 实现一个路由器
let router = [];

class Application {
    // 实现get方法和listen方法
    get(path, handler){
        router.push({
            path,
            method:'get',
            handler
        })
    }

    listen(){
        // 创建一个服务器
        // 创建http服务器
        http.createServer((req,res) => {
            // url.parse可以把url分成多个部分,这里只取pathname
            let {pathname} = url.parse(req.url, true)
            for(const route of router){
                if(route.path === pathname){
                    route.handler(req,res);
                    return ;
                }
            }
        }).listen(...arguments)
    }

}

module.exports = function (config){
    return new Application();
}