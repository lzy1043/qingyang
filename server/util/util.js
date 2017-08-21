// const Encrypt = require('./crypto,js');
const http = require('http')
var querystring = require('querystring')
function createWebAPIRequest(host,path,method,data,cookie,callback,errorcallback){
  console.log(path)
  let data_res = ''
  const http_client = http.request({
    hostname: host,
    method: method,
    path: path,
    headers: {
      'Accept':'*/*',
      'Accept-Language': 'zh-CN,zh;q=0.8,gl;q=0.6,zh-TW;q=0.4',
      'Connection': 'keep-alive',
      'Content-Type': 'Content-Type:application/json; charset=utf-8',
      'Origin': 'https://news.aotu.io',
      'Cookie': cookie,
      'HOST': 'aotu.jd.com',
      'Referer': 'https://news.aotu.io/',
      'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/33.0.1750.152 Safari/537.36',
    }
  },function(res){
    res.on('error',function(err){
      errorcallback(err)
    })
    res.setEncoding('utf8')
    if(res.statusCode != 200){
      createWebAPIRequest(host, path, method, data, cookie, callback)
    }else{
      res.on('data',function(chunk){
        data_res += chunk
      })

      res.on('end',function(){
        if(data_res == ''){
          createWebAPIRequest(host, path, method, data, cookie, callback)
          return
        }
        if (res.headers['set-cookie']) {
          callback(data_res, res.headers['set-cookie'])
        } else {
          callback(data_res)
        }
      })
    }
  })
  http_client.write('')
  http_client.end()
}

module.exports = {
  createWebAPIRequest
}