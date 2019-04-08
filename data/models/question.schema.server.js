const mongoose = require('mongoose');
const TrueFalseSchema = require('./trueFalse.schema.server');
const MultipleChoiceSchema = require('./multiple-choice.schema.server');
module.exports = mongoose.Schema({
    _id: Number,
    question: String,
    points: Number,
    multipleChoice: MultipleChoiceSchema,
    trueFalse: TrueFalseSchema,
    type: {type: String, enum: ['MULTIPLE_CHOICE', 'TRUE_FALSE']}
}, {collection: 'questions'});
