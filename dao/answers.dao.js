const answerModel = require('../data/models/answer.model.server');
cAnswer = ans =>
    answerModel.create(ans);

findAnswerOfQuestionByStudent = (sid,qid) =>
    answerModel.find({
        student:sid,
        question:qid
    });

findAllAnswers = ()=>{
    return answerModel.find();
};

findAnswerById = id=>{
    return answerModel.findId(id);
};

findAnswersByStudentId = sid=>{
    return answerModel.find({student:sid});
};

findAnswersByQuestionId = qid=>{
    return answerModel.find({question:qid});
};
module.exports = {
    cAnswer,
    findAllAnswers,
    findAnswerById,
    findAnswersByStudentId,
    findAnswersByQuestionId,
    findAnswerOfQuestionByStudent
};
