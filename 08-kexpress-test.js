const kexpress = require('./kexpress');
const fs =require('fs');
const path = require('path');
const app = kexpress();

// 可以摘到单个路由页面进行模块开发
app.get('/', (req, res) => {
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
})
app.get('/users', (req, res) => {
      // 接口编写
      // 请求状态码
        res.statusCode = 200;
       // 设置响应头 json数据
        res.setHeader('Content-Type', 'json');
        // 前后的交流都是以字符串交流
        res.end(JSON.stringify([{name:'tom', age:21}]));
})
app.listen(3002)