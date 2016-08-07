/**
 * Created by tangyitangyi on 16/8/3.
 */
var http=require('http');
var app=require('../app.js')
http.createServer(app).listen(80).on('listening',function(){
    console.log('Listening on port 80');
});
