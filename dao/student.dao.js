const studentModel = require('../data/models/student.model.server');
cStudent = student =>
    studentModel.create(student);
findAllStudents = ()=>{
    return studentModel.find();
};

findStudentById = id=>{
    return studentModel.findId(id);
};

upStudent = (studentId, student) =>
    studentModel.update({_id: studentId}, {$set: student});

delStudent = studentId =>
    studentModel.remove({_id: studentId});
module.exports = {
    cStudent,
    findAllStudents,
    findStudentById,
    upStudent,
    delStudent
};
