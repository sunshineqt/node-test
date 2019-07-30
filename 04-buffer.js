// buffer：八位字节组成的数组，可以有效的在结束中存储二进制数据
// 创建
const buf1 = Buffer.alloc(10);
console.log(buf1);

// 从数据创建 十六进制
const buf2 = Buffer.from([1,2,10]);
console.log(buf2);

// 从字符串创建，一个英文字母需要两个字节，默认utf-8
const buf3 = Buffer.from('dsd 当时的','utf8');
console.log(buf3);

// 写入
buf1.write('hello');
console.log(buf1)

// 读取
console.log(buf3.toString())

// 合并
const buf4 = Buffer.concat([buf1,buf3]);
console.log(buf4.toString());

