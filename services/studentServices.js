const studentDao = require('../dao/university.dao.server');
createStudent = (req, res) =>
    res.json(studentDao.cStudent(req.body));

module.exports={
    createStudent
};
