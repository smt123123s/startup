const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const routes = require('./routes/index'); 
const session = require('express-session');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const mongoStore = require('connect-mongo')(session);
const config = require('config-lite')(__dirname);
const flash = require('connect-flash');

let app = express();

//連接mongodb
let dbUrl = 'mongodb://127.0.0.1:27017/startup'
mongoose.connect(dbUrl, {useMongoClient: true});
mongoose.connection.on('connected',()=>{
  console.log("DB連接成功啦~");
});
mongoose.connection.on('error', ()=>{
  console.log("靠，DB連接失敗..");
});
mongoose.connection.on('disconnected', ()=>{
  console.log("DB 已下線~");
});



//moment.js
app.locals.moment = require('moment');


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


//輸出文件
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

//靜態文件放置路徑
app.use(express.static(path.join(__dirname, 'public')));

//設置session放入DB
app.use(session({
  name: config.session.key, //cookie中保存session id 的名稱
  secret: config.session.secret,
  resave: true,
  saveUninitialized: false,
  cookie:{
    maxAge: config.session.maxAge
  },
  store: new mongoStore({
    url: config.mongodb
  })
}))

//允許網頁顯示通知
app.use(flash())

//設置變量
app.use(function (req,res,next){
  res.locals.user = req.session.user
  res.locals.success = req.flash('success').toString()
  res.locals.error = req.flash('error').toString()
  next()
})

//設置路由引入
routes(app)

//錯誤信息處理
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
//分割線

module.exports = app;
