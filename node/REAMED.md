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

  ### 中间件 middlewear
   + 中间件使用，一定要注意next
   + 自定义中间件（全局，局部）

  ```js
  //全局写法
  app.use('/',(req,res,next)=>{
    //中间件
    //此处可以做拦截的代码逻辑操作
    next()
  })

  //局部写法,在哪一个写哪一个有用
  app.get('./test',(req,res,next)=>{
     //中间件
    //此处可以做拦截的代码逻辑操作
    next()
  },(req,res)=>{
    res.send('test')
  })

  ```
### 绝对路径
 + 物理路径，也就是绝对路径
  - __dirname  ,console.log(__dirname),可以获取绝对路径
+ 绝对路径拼接
  ```js
  const path = require('path')
  //绝对路径拼接
  path.join(__dirname, './xx')

  ```


### mongodb安装
+ 百度地址下载以后安装  [地址]https://www.mongodb.com/try/download/community，  下载  MongoDB Community Server 的msi
+ 配置环境变量
+ 在一个C或D或E盘的根目录下创建文件夹data/db两个文件
+ 找到mongodb下面的bin路径，打开cmd运行 mongod --dbpath C:\data\db就可以启动了
+ 启动以后，检查是否成功，打开http://localhost:27017/，查看是否有以下显示，显示则成功
 - It looks like you are trying to access MongoDB over HTTP on the native driver port.

+ 另起一个cmd 输入命令 mongo, 运行不报错，在箭头后面输入命令 show dbs显示以下数据库成功
 - admin  0.000GB
 - congig 0.000GB
 -local   0.000GB




### mongodb
 + 指令
  - mongodb   数据库名
  - mongod    命令行启动数据库命令
  - mongo     命令行操作数据库指令
  - mongoose node  操作数据库的插件


### 跨域
 + cors
 + jsonp
 + 代理 （仅前端即可实现） 
   - 原理，就是自己创建一个服务器使用api接口转发请求代理到要需要访问服务器api，自己请求自己服务的api就不会形成跨域了

