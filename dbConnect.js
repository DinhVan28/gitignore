var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true,useUnifiedTopology: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("kết nối database thành công");

});
var Schema = mongoose.Schema;
var UserSchema = new Schema({
    username: String,
    password: String,
    age: Number,
    address: String
},{
    collection: "user2"
});
var UserModel = mongoose.model("user2",UserSchema);
    
// UserModel.create({
//     username: "Dinhvan",
//     password: '1',
//     age: 26,
// }).then(function(data){
//          console.log(data)
// })
// UserModel.find({
//     age:{
//         $gte: 2020
//     }
// })
//===============================
// UserModel.find({
//     age:{
//         $gt:25
//     }
// }).then(function(data){
//     console.log(data);
// })
//==================================
// UserModel.find({
//     age:{
//         $gte:20,
//         $gte:30
//     }
// }).then(function(data){
//     console.log(data);
// })
//===================================
// UserModel.create({
//     username: "Dinhvan",
//     password: '1234',
//     age: 26,
// }).then(function(data){
//          console.log(data);
// })
//=======================================
// UserModel.find({}).then(function(data){
//     console.log(data);
// })
//========================================
// UserModel.find({
//     address: 'HP'
// }).then(function(data){
//     console.log(data);
// })
//=======================================
// UserModel.find({
//     $or:[{age:{$lt:30}},{usernamme: "ta"
// }]  
// }).then(function(data){
//     console.log(data);
// })
//===========================================
// UserModel.find({
//     username:"ta",
//     password:"1"
// }).then(function(data){
//     if(data.length>=1){
//     console.log("chúc mừng đăng nhập thành công");
// }else{
//     console.log("bạn sai tài khoản hoặc mật khẩu");
// }
// })
// UserModel.find().exec().then
// UserModel.find().limit().exec()