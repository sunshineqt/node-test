// fs
const fs = require('fs');

// 同步读取文件，读取文件结束才会继续执行
const dataSync = fs.readFileSync('./conf.js');  // 阻塞操作，不推荐
console.log(dataSync)

// 异步读取文件，得到结果有回调函数进行处理,不会阻塞，推荐
fs.readFile('./conf.js', (err, data) => {
    console.log(data)
})

console.log('dddd')

// 异步读取文件可能导致回调地狱，解决方案：promise或generator或async await
// 异步代码同步化

// ps读取文件得到的数据是buffer形式，toString方法可以转换为正常显示的数据

// 方法1.0 promise node提供的方法包
const {promisify} = require('util');
// 包装成能够返回promise的方法
const readFile1 = promisify(fs.readFile);
// promise对象，既可以用同步方法来写，不用回调函数，直接用then方法
readFile1('./conf.js').then(data => console.log(data.toString()));
// ps：promise可以多层then下去，但代码可读性不好

// 方法1.1 node v10.0以上版本提供了fs Promises API
// const fsp = require('fs').promises;
// 或者直接解构
// const {promises} = require('fs');
// 然后可以直接读文件
// promises.readFile('./conf.js').then(data => console.log(data.toString()));

// 方法2 promises

// 方法3 async await


