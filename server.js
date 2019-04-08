var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');

var app = express();
app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: 'any string'
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
var uniServices=require('./services/universityServices');
var studentServices=require('./services/studentServices');

require('./db/database')();
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
app.post('/api/student', studentServices.createStudent);
app.get('/api/populate', uniServices.createDatabase);
app.listen(3000);
