const mongoose = require('mongoose');
module.exports = mongoose.Schema({
    _id: Number,
    question: String,
    points: Number,
    type: {type: String, enum: ['MULTIPLE_CHOICE', 'TRUE_FALSE']}
},{
    collection: 'questions',
    discriminatorKey: 'type'
});
