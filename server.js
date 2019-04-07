var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');

var app = express();
app.get('/hello', function(req, res){
    res.send('hello world');
});
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin",
        "*");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods",
        "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Credentials", "true");
    next();
});
app.listen(3000);
