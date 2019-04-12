const questionModel = require('../data/models/question.model.server');

cQuestion = (question) => {
    return questionModel.create(question);
};
upQuestion = (qid, ques,cb) =>{
  return  questionModel.update({_id: qid}, {$set: ques}).exec(cb);
};
delQuestion = (id,cb) => {
    return questionModel.remove({_id: id}).exec(cb);
};
findAllQuestions = (cb)=>{
    return questionModel.find().exec(cb);
};

findQuestionById = (id,cb)=>{
    return questionModel.findById(id).exec(cb);
};

deleteAll= ()=>{
  return questionModel.remove({}).exec();
};

module.exports = {
    cQuestion,
    findAllQuestions,
    findQuestionById,
    upQuestion,
    delQuestion,
    deleteAll
};
