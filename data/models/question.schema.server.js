const mongoose = require('mongoose');
const TrueFalseSchema = require('data/models/trueFalse.schema.server');
const MultipleChoiceSchema = require('data/models/multiple-choice.schema.server');
modules.exports = mongoose.Schema({
    _id: Number,
    question: String,
    points: Number,
    questionType: String,
    multipleChoice: MultipleChoiceSchema,
    trueFalse: TrueFalseSchema,
    type: {type: String, enum: ['MC', 'TF']}
}, {collection: 'questions'});
