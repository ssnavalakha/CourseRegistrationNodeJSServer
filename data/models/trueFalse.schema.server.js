const mongoose = require('mongoose');
const trueFalseSchema = mongoose.Schema({
    isTrue: Boolean
}, {collection: 'questions'});
module.exports = trueFalseSchema;
