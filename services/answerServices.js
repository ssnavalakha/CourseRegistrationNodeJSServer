const answerDao = require('../dao/answers.dao');
createAnswer = (req, res) => {
    answerDao.cAnswer(req.body);
    res.json(req.body)
};
findAnswersOFStudentForQuestion = (req, res) =>
    answerDao.findAnswerOfQuestionByStudent(req.params['sid'],req.params['qid'],
        (err,result) => {
            res.json(result)
        });

module.exports={
    createAnswer,
    findAnswersOFStudentForQuestion
};
