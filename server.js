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
var questionServices=require('./services/questionServices');

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

app.get('/api/populate', uniServices.createDatabase);

app.post('/api/student', studentServices.createStudent);
app.get('/api/student', studentServices.findStudentAll);
app.get('/api/student/:id', studentServices.findStudentAll);
app.put('/api/student/:id', studentServices.updateStudent);
app.delete('/api/student/:id', studentServices.deleteStudent);

app.post('/api/question', questionServices.createQuestion);
app.get('/api/question', questionServices.findQuestionAll);
app.get('/api/question/:id', questionServices.findByIdQuestion);
app.put('/api/question/:id', questionServices.updateQuestion);
app.delete('/api/question/:id', questionServices.deleteQuestion);


app.listen(3000);
