const express = require('express')
const app = express()
const fs = require('fs')
const path = require('path')
const router = require('./Router/router.js')
const port = 80;
app.use('/', router)
// console.log(path.join(__dirname,router))
const https = require('https')


// var key = fs.readFileSync(path.join(__dirname, './certificates/private.pem'))
// var cert = fs.readFileSync(path.resolve(__dirname, './certificates/certificate.pem'))
// var ca = fs.readFileSync(path.resolve(__dirname, './certificates/ca_bundle.pem'))
// app.listen(port)
// console.log('http://localhost:8080')




const httpsOptions = {
    key : fs.readFileSync(path.join(__dirname, 'certificates','private.pem')),
    cert : fs.readFileSync(path.join(__dirname, 'certificates','certificate.crt')),
}
https.createServer(httpsOptions,app)
.listen(443, function () { 
    console.log("443")
 })

app.listen(port,()=>{console.log(port)})

