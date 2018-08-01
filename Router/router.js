var express = require('express')
var app = express()
var path = require('path')
var bodyparser = require('body-parser')
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}))
var db = require('../database.js')
var multer = require('multer');
var ms = require('mediaserver')


app.use(express.static(path.join(__dirname, '../src/bin')))
app.use(express.static(path.join(__dirname, '../src/bin/audio')))
app.use(express.static(path.join(__dirname, '../src/')))
app.use(express.static(path.join(__dirname, '../src/bin')))
app.use(express.static(path.join(__dirname, '../private/')))

// console.log(path.join(__dirname, '../src/bin/'))
app.use(express.static(path.join(__dirname, '../src/libs/Angular')))
app.use(express.static(path.join(__dirname, '../src/libs/Bootstrap')))
app.use(express.static(path.join(__dirname, '../src/libs/fonts')))
app.use(express.static(path.join(__dirname, '../src/libs/jquery')))
app.use(express.static(path.join(__dirname, '../src/styles')))
app.use(express.static(path.join(__dirname, '../src/libs/ng-file-upload-bower-10.1.8')))


var storePropic = multer.diskStorage({
  destination : (req,file,cb) => {
      cb(null, 'uploads/files')
  },
  filename : (req, file, cb) => {
    console.log(file)
      cb(null, file.originalname)
  }
})
var storeAudio = multer.diskStorage({
  destination : (req,file,cb) => {
      cb(null, 'uploads/audios')
  },
  filename : (req, file, cb) => {
    // console.log(req,cb,file)
      cb(null, file.filename)
  }
})
var upload = multer({storage : storePropic})
var storeAudio = multer({storage : storeAudio})


app.post('/add',upload.fields([{
  name : 'group_pic', maxCount : 1
},{
  name : 'audio', maxCount : 1
}]), function (req, res) { 
  console.log(req.file)
  // .then(()=>{
       new db.nanben({name : req.body.name,'message' : req.body.message, audio : '123', group_pic : "one"}, function (data) {
           console.log(data)
         }).save()
         .then(() => {
           res.send("okay")
         })
    //  })
 })

 app.get('/admin', function (req, res) { 

   res.sendFile(path.join(__dirname,'../private/admin.html'))
  })


  app.get('/adminData', function (req, res) { 
    db.nanben.find(function (err, datas) { 
      if(err){console.log(err)}
      else {res.json(datas)}
     })
   })
module.exports = app