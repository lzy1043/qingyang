const request = require('request')
const cheerio = require('cheerio')
const express = require('express')
const router = express.Router()
const {createWebAPIRequest} = require('../util/util')
const mysql = require('../util/mysql')
router.get('/:id',(req,res) => {
  const articleId = req.params.id
  console.log(`news.aotu.io/a/${articleId}`)
  request(`https://news.aotu.io/a/${articleId}`, (err, response, body) => {
    if (!err && response.statusCode === 200) {
      const $ = cheerio.load(body)
      $('.comment-box .avatar').attr('src', 'https://news.aotu.io/assets/img/default_avatar.svg')
      let articleContent = $('.view').html();
      let data = {
        data: articleContent
      }
      res.send(data)
    }
  })
})

module.exports = router