const express = require('express')
const router = express.Router()
const {createWebAPIRequest} = require('../util/util')
const mysql = require('../util/mysql')

router.get('/',(req,res) => {
  mysql.query(`select content from qingyang where type = 'hotNewsGroup' limit 0,10`,(err)=>{
    if(err){
      console.log('query Error:' + err.message)
      return
    }
  },(result)=>{
    if(result && result.length ){
      let data = []
      result.forEach(function(item){
        data.push(JSON.parse(item.content))
      })
      res.send(data)
    }else{
      const cookie = req.get('Cookie') ? req.get('Cookie') : ''
      createWebAPIRequest('aotu.jd.com','/aurora/api/hotNewsGroup','GET',null,cookie,(data_res) => {
        res.send(data_res)
        var temp = JSON.stringify(JSON.parse(data_res).blocks);
        mysql.formatterDataToInsert(temp,'hotNewsGroup')
      },err => res.status(502).send('fetch error'))
    }
  })
})

module.exports = router