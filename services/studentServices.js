const studentDao = require('../dao/student.dao');
createStudent = (req, res) =>
    res.json(studentDao.cStudent(req.body));
findStudentAll =(req,res) =>
    res.json(studentDao.findAllStudents());
findByIdStudent = (req,res) =>
    res.json(studentDao.findStudentById(req.params['id']));

deleteStudent = (req, res) =>
    res.json(
        studentDao.delStudent(req.params.id)
    );

updateStudent = (req, res) =>
    res.json(
        studentDao.upStudent(req.params.id, req.body)
    );

module.exports={
    createStudent,
    findStudentAll,
    findByIdStudent,
    deleteStudent,
    updateStudent
};
