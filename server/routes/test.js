const express = require("express");
const router = express.Router();
const mysql = require('mysql');

router.get('/',(req,res) => {

  let connection = createMysqlConn();

  connection.query('select content from qingyang',(err,result) => {
    if(err){
      console.log('Error：' + err.message)
      return
    }
    let data = []
    result.forEach(function(item){
      data.push(JSON.parse(item.content))
    })
    res.send(data)
  })

})

function createMysqlConn(){
  let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'qingyang'
  })
  return connection;
}

module.exports = router;