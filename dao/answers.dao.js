const answerModel = require('../data/models/answer.model.server');
cAnswer = (ans) => {
    return answerModel.create(ans);
};
findAnswerOfQuestionByStudent = (sid,qid,cb) =>
    answerModel.find({
        student:sid,
        question:qid
    }).populate('student').populate('question').exec(cb);

findAllAnswers = (cb)=>{
    return answerModel.find().exec(cb)
};

findAnswerById = (id,cb)=>{
    return answerModel.findById(id).exec(cb);
};

findAnswersByStudentId = (sid,cb)=>{
    return answerModel.find({student:sid}).exec(cb);
};

findAnswersByQuestionId = (qid,cb)=>{
    return answerModel.find({question:qid}).exec(cb);
};
deleteAll= ()=>{
    return answerModel.remove({}).exec();
};
module.exports = {
    cAnswer,
    findAllAnswers,
    findAnswerById,
    findAnswersByStudentId,
    findAnswersByQuestionId,
    findAnswerOfQuestionByStudent,
    deleteAll
};
