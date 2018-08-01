var express = require('express')
var app = express()
var router = require('./Router/router.js')
app.use('/', router)




var port = 80;
app.listen(port)
// console.log('http://localhost:8080')
