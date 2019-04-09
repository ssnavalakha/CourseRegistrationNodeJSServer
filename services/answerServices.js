const answerDao = require('../dao/university.dao.server');
createAnswer = (req, res) =>
    res.json(answerDao.cAnswer(req.body));

findAnswersOFStudentForQuestion = (req, res) =>
    res.json(answerDao.findAnswerOfQuestionByStudent(req.params['sid'],req.params['qid']));

module.exports={
    createAnswer,
    findAnswersOFStudentForQuestion
};
