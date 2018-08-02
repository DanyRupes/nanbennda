var mongoose = require('mongoose')
// mongoose.connect("mongodb://localhost:27017/shop")
// url = 'mongodb://localhost:27017/nanbenda'
//  url = 'mongodb://danyrupes:danyrupes007@ds119171.mlab.com:19048/nanbenda'
//  url = 'mongodb://danyrupes:danyrupes007@ds019048.mlab.com:19048/nanbenda'
 url = 'mongodb://danyrupes:danyrupes007@ds019048.mlab.com:19048/nanbenda'
// url = 'mongodb://danyrupes:danyrupes007@ds119171.mlab.com:19171/gadget-shop'
mongoose.connect(url);

mongoose.connection.on('connected', function(){
    console.log("mongodb Connection is open at " +url)
})
mongoose.connection.on('error', function(err){
    console.log("mongodb Connection error " +err)
})

var Schema = mongoose.Schema;
var nanbans = new Schema({
    name : String,
    message : String,
    group_pic : String,
    audio : String,
    pic1 : String,
    pic2 : String
})

var nanben = mongoose.model("nanben", nanbans);
module.exports = {nanben:nanben}