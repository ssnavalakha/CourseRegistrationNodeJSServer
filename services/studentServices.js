const studentDao = require('../dao/student.dao');
createStudent = (req, res) =>
{
    studentDao.cStudent(req.body);
    res.json(req.body);
};
findStudentAll =(req,res) =>
    studentDao.findAllStudents((err,result) => {
        res.json(result)
    });

findByIdStudent = (req,res) =>
    studentDao.findStudentById(req.params['id'],(err,result) => {
        res.json(result)
    });

deleteStudent = (req, res) =>
    studentDao.delStudent(req.params.id,(err,result) => {
        res.json(result)
    });

updateStudent = (req, res) =>
{
    studentDao.upStudent(req.params.id, req.body,(err,result) => {
        res.json(result)
    });
};

module.exports={
    createStudent,
    findStudentAll,
    findByIdStudent,
    deleteStudent,
    updateStudent
};
