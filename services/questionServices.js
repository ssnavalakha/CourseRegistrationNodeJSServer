const QuestionDao = require('../dao/questions.dao');
createQuestion = (req, res) =>{
    QuestionDao.cQuestion(req.body);
    res.json(req.body)
}

findQuestionAll =(req,res) =>
    QuestionDao.findAllQuestions((err,result) => {
        res.json(result)
    });
findByIdQuestion = (req,res) =>
    QuestionDao.findQuestionById(req.params['id'],(err,result) => {
        res.json(result)
    });

deleteQuestion = (req, res) => {
        QuestionDao.delQuestion(req.params.id,(err,result) => {
            res.json(result)
        })
};
updateQuestion = (req, res) =>
    QuestionDao.upQuestion(req.params.id, req.body,(err,result) => {
        res.json(result)
    });

module.exports={
    createQuestion,
    findQuestionAll,
    findByIdQuestion,
    deleteQuestion,
    updateQuestion
};
