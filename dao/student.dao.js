const studentModel = require('../data/models/student.model.server');
cStudent = (student) => {
    return studentModel.create(student);
};
findAllStudents = (cb)=>{
    return studentModel.find().exec(cb);
};

findStudentById = (id,cb)=>{
    return studentModel.findById(id).exec(cb);
};

upStudent = (studentId, student,cb) => {
    return studentModel.update({_id: studentId}, {$set: student}).exec(cb);
};
delStudent = (studentId,cb) => {
    return studentModel.remove({_id: studentId}).exec(cb);
};
deleteAll= ()=>{
    return studentModel.deleteMany({});
};
    module.exports = {
    cStudent,
    findAllStudents,
    findStudentById,
    upStudent,
    delStudent,
    deleteAll
};
