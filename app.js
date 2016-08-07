/**
 * Created by tangyitangyi on 16/8/3.
 */
var express=require('express');//express  框架
var path=require('path');//跳转相关
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var engine = require('express-dot-engine');
var session=require('express-session');
var uuid=require('uuid');
var requireDir = require('require-dir');
var fs=require('fs');


var app=express();

//var index=require('./routes/index.js');//引用index视图
var routes = requireDir('./routes', {recurse: true});

var stream=fs.createWriteStream('../log.txt');

app.engine('html', engine.__express);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine','html');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname,'public')));

app.use('/',routes.index);

// app.use(function(req,res,next){
//     var err = new Error('Not Found');
//     err.status = 404;
//     next(err);
// });

module.exports=app;