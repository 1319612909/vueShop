笔记整理
步骤：
客户端使用用户名和密码进行登录
服务端验证通过之后生成该用户的token并且返回
客户端存储token值，
客户端后续所以的请求操作需要携带上token



客户端与服务器端的一个身份校验，服务器接收到token，会验证是否存在，如果存在表示已经登录过了。通过token返回对应的数据

