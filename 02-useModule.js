// 内建模块
const os = require('os');
const mem = os.freemem() / os.totalmem() * 100
console.log(`内存占用率${mem}%`)

// 第三方模块,需要先安装 npm i cpu-stat -S
const cpuStat = require('cpu-stat');
cpuStat.usagePercent((err, percent) => {
    console.log(`cpu占用率：${percent}`);
})

// 自定义模块
// 引用自定义模块1 导出整个对象
const conf = require('./conf');
console.log(conf);

// 引用自定义模块2 导出对象的一个属性
const {rmbToDollar} = require('./currency');
console.log(rmbToDollar(10));

// 引用自定义模块3 导出一个配置
const {rmbToDollarNew} = require('./conf2')(6);
console.log(rmbToDollarNew(10));

function showStatistics(){
    const mem = os.freemem() / os.totalmem() * 100
    console.log(`内存占用率${mem}%`)
    cpuStat.usagePercent((err, percent) => {
        console.log(`cpu占用率：${percent}`);
    })
}

// setInterval(showStatistics, 1000);