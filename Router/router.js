var express = require('express')
var app = express()
var path = require('path')
var bodyparser = require('body-parser')
app.use(bodyparser.json())
var limitmyData = '10mb'
app.use(bodyparser.urlencoded({extended:true, limit : limitmyData}))
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

app.use(express.static(path.join(__dirname, '../uploads/files')))
app.use(express.static(path.join(__dirname, '../uploads/audi')))


//////////////////////////////
var myAudioFile = [];

var storePropic = multer.diskStorage({
  destination : (req,file,cb) => {
      cb(null, 'uploads/files')
  },
  filename : (req, file, cb) => {
    console.log(file)
    
      cb(null, file.originalname)
  }
})
var storeAudi = multer.diskStorage({
  destination : (req,file,cb) => {
      cb(null, 'uploads/audi')
  },
  filename : (req, file, cb) => {
      cb(null, file.originalname)
  }
})



// var type = multer({storage : upload1})

var upload = multer({storage : storePropic})
var upload1 = multer({storage : storeAudi})


app.post('/postAudio',upload1.single('audi'), function (req, res) { 
    myAudioFile.push(req.file.originalname)
    res.send("fine")
 })

app.post('/add',upload.fields([{
  name : 'group_pic', maxCount : 1
},{
  name : 'audio', maxCount : 1
},{
  name : 'pic1', maxCount : 1
},{
  name : 'pic2', maxCount  :1
}]), function (req, res) { 
  var group_,pic1_,pic2_;
  var audio_ = myAudioFile
          try {
            if(audio_ == 0) {
              audio_ = 0;
            }
          }
          catch(e){
            audio_ = 'undefined'
          }
          try {
            group_ = req.files.group_pic[0].originalname;
          }
          catch(e){
            group_ = 'undefined'
          }
          try {
            pic1_ = req.files.pic1[0].originalname;
          }
          catch(e){
            pic1_ = 'undefined'
          }
          try {
            pic2_ = req.files.pic2[0].originalname;
            startDB();
          }
          catch(e){
            pic2_ = 'undefined'
            startDB();
          }
          function startDB(){
            new db.nanben({namef : req.body.namef,namet : req.body.namet,'message' : req.body.message, audio : audio_, group_pic : group_, pic1 : pic1_, pic2 : pic2_}, function (data) {
  
              }).save()
              .then(() => {
                res.send("okay")
              })
          }
 })

 app.get('/admin', function (req, res) { 

   res.sendFile(path.join(__dirname,'../private/admin.html'))
  })


  app.post('/adminData', function (req, res) { 
    // console.log(req.body)
    db.nanben.find({_id : req.body.id},function (err, datas) { 
      if(err){console.log(err)}
      else {res.json(datas)}
     })
   })

  app.get('/item_data', function (req, res) { 
    db.nanben.find(function (err, datas) { 
      if(err){console.log(err)}
      else {res.json(datas)}
     })
   })
module.exports = app

// var upload1 = multer({ dest: __dirname + '/uploads/audios'});
// var upload1 = multer.diskStorage({
//   destination : function(req, file, cb){
//     cb(null, 'uploads/audios')
//   },
//   filename : function (req, file, cb) { 
//     cb(null, file.filename)
//    }
// })