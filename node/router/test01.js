// 读取文件,先引入fs
const fs = require('fs')
/*
readFile()
第一个参数是要读取文件的路径
第二个参数是一个回调函数
error  读取失败, error就是错误对象 ，读取成功,  error就是null
data   读取失败, data就是错误对象 ， 读取成功,  data就是读取到的数据
*/
fs.readFile('../docs/data.text',function(error,data){
    // console.log(data.toString())
})


// 构建web服务器
/* 提供http 模块
1：加载http核心模块
2: 使用http.createServer()方法创建一个web服务器
3: 服务器提供对数据的服务
双请求
接收请求
处理请求
发送响应
4:绑定端口号，启动服务
*/

// 1
const http = require('http')
// 2
let server = http.createServer()

// 3
// 注册request请求时间，当客户请求过来，就会自动触发服务器的request的请求事件然后执行第二个参数，回调处理
// 需要接受2个参数
/*
    request  请求对象
      request.url  端口号后面的路径
    response 响应对象
      response.write()  响应内容只能是二进制数据或者字符串

*/
server.on('request',function(request,response){
    // request.url 端口号后面的路径
    response.setHeader('Content-Type', 'text/html;charset=utf-8')
    console.log('收到客户的请求了'+ request.url)

    // 通过不同的url路径响应不同的内容
    if(request.url == '/about'){
        response.write('url的路径是about')
    //  传 除开字符串的数据类型必须转为字符串进行响应
        let userInfo =[
            {name:'zs',age:18},
            {name:'ls',age:20},
            {name:'ww',age:22}
        ]
        let data = JSON.stringify(userInfo)
        response.end(data)
    }else{
        // write用来给客户发送响应数据， 可以使用多次，但是最后使用end结束响应否则会一直等待响应
        response.write('hello')
        response.write('hello123')
        response.end()
    }

    // write用来给客户发送响应数据， 可以使用多次，但是最后使用end结束响应否则会一直等待响应
    // response.write('hello')
    // response.write('hello123')
    // response.end()
})

// 4
server.listen(3000,function(){
    console.log('服务器启动成功了，可以通过http://127.0.0.1:3000 进行访问了')
})


// exports
// 通过require导入需要的js文件，如果想要使用引入文件的内部东西，必须在引入的文件中使用exports导出才能在本文件中使用
const Obj = require('./test02')

console.log(Obj.add(5,5))
console.log(Obj.a)
