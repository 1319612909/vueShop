// 读取文件,先引入fs
var fs = require('fs')
/*
readFile()
第一个参数是要读取文件的路径
第二个参数是一个回调函数
error  读取失败, error就是错误对象 ，读取成功,  error就是null
data   读取失败, data就是错误对象 ， 读取成功,  data就是读取到的数据
*/
fs.readFile('../docs/data.text',function(error,data){
    console.log(data.toString())
})