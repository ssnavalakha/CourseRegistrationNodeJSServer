const mongoose = require('mongoose');
const studentSchema = require('data/models/student.schema.server');
module.exports = mongoose.model('StudentModel', studentSchema);
