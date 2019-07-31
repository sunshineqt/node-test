const http = require('http');
const fs = require('fs');

// 创建http服务器
http.createServer((req,res) => {
    const {url, method} = req;
    if(url === '/' && method === 'GET'){
        // 读取首页
        fs.readFile('./index.html', (err, data) => {
            // 设置响应头 html
            res.setHeader('Content-Type', 'text/html');
            res.end(data);
        })
        // res.end('服务器响应')
    }else if(url === '/users' && method === 'GET'){
           // 设置响应头 json数据
           res.setHeader('Content-Type', 'json');
        
        //    前后的交流都是以字符串交流
           res.end(JSON.stringify([{name:'tom', age:21}]));
    }

}).listen(3005)