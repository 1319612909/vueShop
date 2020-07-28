const express = require('express')
const router = express.Router()

router.get('/add',(req,res)=>{
    res.send('foot/add')
})

router.get('/del',(req,res)=>{
    res.send('foot/del')
})
module.exports = router