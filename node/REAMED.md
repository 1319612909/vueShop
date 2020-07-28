### marckdown 使用
# 标题1
## 标题2
```js
  console.log('js')

```
*  内容引用
+  列表
-  xxx
+  列表2
1.111
2.222
[地址] https://www.baidu.com

#node
## what
+ chrone VB runtime
+ 事件驱动
+ 非阻塞的i/o

i/o : input cutput 输入输出，正常i/o的作用都是阻塞的

### 爬虫
 1、获取目标网站
 2、分析网站内容
 3、获取有效信息 下载或者其他操作

 ### cheerio :https://www.jianshu.com/p/629a81b4e013
 1、爬虫中处理数据可以用到这个第三方插件

 ```js
 var cheerio = require('cheerio'),
    $ = cheerio.load('<h2 class = "title">Hello world</h2>');

$('h2.title').text('Hello there!');
$('h2').addClass('welcome');

 
 ```

 ### 服务器
  1、服务器就是一台电脑，
  2、服务器软件（apach tomcat iis  ngnix node)
  3、服务器ip 和端口号
局域网：服务器通过网线连接，每一个电脑都会有一个ip
外网：
ip：确定服务器主机的位置
端口号：确定服务器里某一个程序

 ### express 框架 
 1、安装
 2、引入

### body-parser
 1、使用post 需要引用第三方插件 body-parser ，在解析解数据
  cnpm install body-parser --save
  2、两种解析数据方式

### api 接口书写

  + 接收数据
   - get  req.query 获取前台传递的参数
   - post  req.body  获取参数，需要使用body-parser来解析参数格式

### 路由
 + express.Router()
  ```js
  let userRouter = require('./routerTest/userRouter')
  app.use('/user',userRouter)
  
  ```
  -对应的userRouter.js文件
  ```js
  const router = express.Router()
  router.get('/add',(req,res)=>{
      res.send('user/add')
  })
  module.exports = router
  ```