const mongoose = require('mongoose');
const questionSchema = require('./question.schema.server');
const TrueFalseSchema = require('./trueFalse.schema.server');
const MultipleChoiceSchema = require('./multiple-choice.schema.server');

var m= mongoose.model('QuestionModel', questionSchema);
m.discriminator('MULTIPLE_CHOICE',MultipleChoiceSchema,{discriminatorKey: 'type'});
m.discriminator('TRUE_FALSE',TrueFalseSchema,{discriminatorKey: 'type'});
module.exports = m;
