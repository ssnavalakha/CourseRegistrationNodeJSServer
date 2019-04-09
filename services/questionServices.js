const QuestionDao = require('../dao/university.dao.server');
createQuestion = (req, res) =>
    res.json(QuestionDao.cQuestion(req.body));
findQuestionAll =(req,res) =>
    res.json(QuestionDao.findAllQuestions());
findByIdQuestion = (req,res) =>
    res.json(QuestionDao.findQuestionById(req.params['id']));

deleteQuestion = (req, res) =>
    res.json(
        QuestionDao.delQuestion(req.params.id)
    );

updateQuestion = (req, res) =>
    res.json(
        QuestionDao.upQuestion(req.params.id, req.body)
    );

module.exports={
    createQuestion,
    findQuestionAll,
    findByIdQuestion,
    deleteQuestion,
    updateQuestion
};
