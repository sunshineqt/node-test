const http = require('http');
const fs = require('fs');
const path = require('path');
// path-resolve可以将相对地址转换为绝对地址

// 创建http服务器
http.createServer((req,res) => {
    console.log('请求')
    const {url, method} = req;
    if(url === '/' && method === 'GET'){
        // 读取首页
        console.log(path.resolve('./index.html'))
        fs.readFile(path.resolve('./index.html'), (err, data) => {
            if(err){
                res.statusCode = 500;
                res.end('500-internal server error');
                return ;
            }
            // 请求状态码
            res.statusCode = 200;
            // 设置响应头 html
            res.setHeader('Content-Type', 'text/html');
            res.end(data);
        })
        // res.end('服务器响应')
    }else if(url === '/users' && method === 'GET'){
        // 接口编写
           // 请求状态码
           res.statusCode = 200;
           // 设置响应头 json数据
           res.setHeader('Content-Type', 'json');
        //    前后的交流都是以字符串交流
           res.end(JSON.stringify([{name:'tom', age:21}]));
    }else if(req.headers.accept.indexOf('image/*') !== -1 && method === 'GET'){
        // 响应对象是输出流
        console.log(url);
        // 加.是相对路径，也可以选择绝对路径展示，前面包裹一层path.resolve函数
        fs.createReadStream(path.resolve('.'+url)).pipe(res);
    }

}).listen(3000)