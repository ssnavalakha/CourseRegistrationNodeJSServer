const mongoose = require('mongoose');
const student = require('data/models/student.schema.server');
const question = require('data/models/question.schema.server');
const answer = mongoose.Schema({
    _id: Number,
    trueFalseAnswer: Boolean,
    multipleChoiceAnswer: Number,
    student: {type: mongoose.Schema.Types.ObjectId, ref: 'StudentModel'},
    question: {type: mongoose.Schema.Types.ObjectId, ref: 'QuestionModel'}
}, {collection: 'answers'});
