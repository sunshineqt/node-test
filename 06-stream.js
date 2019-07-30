// stream用于node中流数据的交互接口
const fs = require('fs');
// 创建读取 读取流
const rs = fs.createReadStream('./conf.js');
// 写入流
const ws = fs.createWriteStream('./conf-copy.js');
// 读取流加一个管道连到写入流,类似文件复制
rs.pipe(ws);

// 二进制友好
const rs2 = fs.createReadStream('./logo.jpg');
const ws2 = fs.createWriteStream('./logo2.jpg');
rs2.pipe(ws2);
