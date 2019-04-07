const mongoose = require('mongoose');
const studentSchema = mongoose.Schema({
    _id: Number,
    gradYear: Number,
    scholarship: BigInt,
}, {collection: 'student'});
module.exports = studentSchema;
