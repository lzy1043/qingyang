const mysql = require('mysql');

const config = {
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'qingyang'
}

function query(sql,errCallback,callback){
  let connection = mysql.createConnection(config,(err) => {
    console.log(err.message)
  })
  connection.query(sql, (err, result) => {
    if(err){
      errCallback(err)
      return
    }
    callback(result)
    connection.end()
  })
}

function insert(data) {
  data.data_array.forEach((item) => {
    let sql = `select * from qingyang where id = "${item.id}" and type = "${data.type}"`
    query(sql,(err)=>{
      if(err){
        console.log('查询数据是否在数据库中已存在：' + err.message)
      }
    },(result)=>{
      if(result && result.length === 0){
        let connection = mysql.createConnection(config,(err) => {
          console.log(err.message)
        })
        var insertSql = 'INSERT INTO qingyang (id,type,content) VALUES(?,?,?)'
        var insertData = [item.id,data.type,item.content]
        console.log(insertSql)
        connection.query(insertSql,insertData, (err, result) => {
          if(err){
            console.log('Insert Error:' + err.message)
            return
          }
          console.log('[数据插入成功]')
          connection.end()
        })
      }
    })
  })
}

function formatterDataToInsert(data_res){
  let data ={
    type:'initData',
    'data_array': []
  }
  let tempData = JSON.parse(data_res)
  if(tempData.length <= 0) return
  tempData.forEach(function(item){
    var temp = []
    temp.id = item.objectId
    temp.content = JSON.stringify(item);
    data.data_array.push(temp)
  })
  insert(data)
}



module.exports = {
  query,
  insert,
  formatterDataToInsert
};