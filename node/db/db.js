// 连接数据库
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/test');  //test 就是要连接哪一个库


// 连接数据库
var db = mongoose.connection; //db就是数据库连接的对象
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected! 连接成功
  console.log('连接成功')
});

// 创建一个Schema对象，把对象转化为数据模式


