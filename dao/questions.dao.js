const questionModel = require('../data/models/question.model.server');

cQuestion = question =>
    questionModel.create(question);

upQuestion = (qid, ques) =>
    questionModel.update({_id: qid}, {$set: ques});

delQuestion = id =>
    questionModel.remove({_id: id});

findAllQuestions = ()=>{
    return questionModel.find();
};

findQuestionById = id=>{
    return questionModel.findId(id);
};

module.exports = {
    cQuestion,
    findAllQuestions,
    findQuestionById,
    upQuestion,
    delQuestion
};
