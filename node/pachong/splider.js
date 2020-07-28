// http协议用http模块，https用协议用https模块
// const http  = require('http')
const https  = require('https')
const fs = require('fs')

// 请求一个网页
let url = 'https://36kr.com/information/web_news/latest'
https.get(url,(res)=>{
    const { statusCode } = res;
    const contentType = res.headers['content-type'];
  
    let error;
    // 任何 2xx 状态码都表示成功的响应，但是这里只检查 200。
    if (statusCode !== 200) {
      error = new Error('请求失败\n' +
                        `状态码: ${statusCode}`);
    } else if (!/^text\/html/.test(contentType)) {
      error = new Error('请求类型错误');
    }
    if (error) {
      console.error(error.message);
      // 消费响应的数据来释放内存。
      res.resume();
      return;
    }



    // 数据分段
    let data = ''
  res.on('data', (chunk) => { 
    data += chunk.toString('utf8')
    console.log(chunk.toString('utf8'))

    
    });

    res.on('end',()=>{

       fs.writeFileSync('./36kr.html',data)

    })
    // 数据流完成
}).on('error',(err)=>{
    console.log(err)
})