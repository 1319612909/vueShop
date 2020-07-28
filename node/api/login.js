const express = require('express')
const app = express()
const bodyParser = require('body-parser')

// 解析表单数据 application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// 解析json数据  application/json
app.use(bodyParser.json())
app.get('/user/login',  (req, res) =>{
    // req.query接收get传递的参数
    console.log(req.query)  
    let {user,pass} = req.query
    if(user=='admin' && pass == 1234){
        res.send({"state":200, "msg":'ok'})

    }else{
        res.send({"state":500, "msg":'NO'})

    }

  })
  
  app.post('/user/reg',(req,res)=>{
      console.log(req.body)
    // body-parser 
    res.send({"state":500, "msg":'NO'})
  })
  app.listen(3000)