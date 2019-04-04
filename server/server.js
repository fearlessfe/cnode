const express = require('express')
const ReactSSR = require('react-dom/server')
const fs = require('fs')
const path = require('path')
const static = require('./util/dev-static')
const favicon = require('serve-favicon')

const isDev = process.env.NODE_ENV === 'development'

const app =express()

app.use(favicon(path.join(__dirname, '../favicon.ico')))

if(!isDev) {
  const serverEntry = require('../dist/server-entry').default

  // 配置静态文件目录
  app.use('/public', express.static(path.join(__dirname, '../dist')))

  const template = fs.readFileSync(path.join(__dirname, '../dist/index.html'), 'utf-8')
  // https://blog.csdn.net/qq_41648452/article/details/80630598
  app.get('*', function(req, res) {
    const appString = ReactSSR.renderToString(serverEntry)
    res.send(template.replace('<!-- <app /> -->', appString))
  })
} else {
  static(app)
}

app.listen(3333, function() {
  console.log('server is listen on 3333')
})
