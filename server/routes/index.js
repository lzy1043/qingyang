const express = require('express');
const router = express.Router();
const {createWebAPIRequest} = require('../util/util')
const mysql = require('../util/mysql.js')

router.get('/', (req,res) => {
  const page = req.query.page
  const channelKey = req.query.key || 'TODAY'
  const offset = (page - 1) * 10
  const cookie = req.get('Cookie') ? req.get('Cookie') : ''
  createWebAPIRequest('aotu.jd.com',`/aurora/api/newsView?simple=true&page=${page}&channelKey=${channelKey}`,'GET',null,cookie, (data_res) => {
    res.send(data_res)
    // mysql.formatterDataToInsert(data_res,channelKey)
  }),err => res.status(502).send('fetch error')
  // mysql.query(`select * from qingyang where type = '${channelKey}' limit ${offset}, 10`,(err) => {
  //   if(err){
  //     console.log('query Error:' + err.message)
  //     return
  //   }
  // },(result) => {
  //   if(result && result.length){
  //     let data = []
  //     result.forEach(function(item){
  //       data.push(JSON.parse(item.content))
  //     })
  //     res.send(data)
  //   }else{
  //     const cookie = req.get('Cookie') ? req.get('Cookie') : ''
  //     createWebAPIRequest('aotu.jd.com',`/aurora/api/newsView?simple=true&page=${page}&channelKey=${channelKey}`,'GET',null,cookie, (data_res) => {
  //       res.send(data_res)
  //       mysql.formatterDataToInsert(data_res,channelKey)
  //     }),
  //     err => res.status(502).send('fetch error')
  //   }
  // })
});

module.exports = router;
