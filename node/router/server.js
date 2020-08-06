const express = require('express')
const app = express()

let userRouter = require('./routerTest/userRouter')
let footRouter = require('./routerTest/footRouter')

app.use('/user',userRouter)
app.use('/foot',footRouter)

app.listen(3000,()=>{

    console.log('server start')
})