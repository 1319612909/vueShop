const fs = require('fs')

// 同步读取
// fs.readdir(path[options], callback)
// let dirs = fs.readdirSync('./')
// console.log(dirs)


//同步的时候使用  try + catch 捕获容易出错的代码，解决不会遇到错误代码就不执行后续代码
try{
    let dirs = fs.readdirSync('./test01.js')
}
catch(err){
    console.log(err)
}

console.log('后续代码')