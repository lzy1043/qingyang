const express = require('express')
const router = express.Router()
const {createWebAPIRequest} = require('../util/util')
const mysql = require('../util/mysql')

router.get('/',(req,res) => {
  const cookie = req.get('Cookie') ? req.get('Cookie') : ''
  createWebAPIRequest('aotu.jd.com','/aurora/api/hotNews','GET',null,cookie,(data_res) => {
    res.send(data_res)
    // mysql.formatterDataToInsert(data_res,'hotNews')
  }, err => res.status(502).send('fetch error'))
  // mysql.query(`select content from qingyang where type = 'hotNews ' limit 0,10`,(err)=>{
  //   console.log('query Error:' + err.message)
  // },(result)=>{
  //   if(result && result.length){
  //     let data = []
  //     result.forEach(function(item){
  //       data.push(JSON.parse(item.content))
  //     })
  //     res.send(data)
  //   }else{
      
  //   }
  // })
})

module.exports = router