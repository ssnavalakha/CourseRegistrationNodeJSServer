const studentDao = require('./student.dao');
const questionDao = require('./questions.dao');
const answerDao = require('./answers.dao');

populate=()=>
{
    var students=[{
        _id:123,
        firstName:"Alice",
        lastName:"Wonderland",
        username:"alice",
        password:"alice",
        gradYear:2020,
        scholarship:15000
    },
        {
            _id:234,
            firstName:"Bob",
            lastName:"Hope",
            username:"bob",
            password:"bob",
            gradYear:2021,
            scholarship:12000
        }];
    for (var i=0;i<students.length;i++)
    {
        studentDao.cStudent(students[i]);
    }
    var questions=[{
        _id:321,
        question:"Is the following schema valid?",
        points:10,
        multipleChoice:{},
        trueFalse:{isTrue:false},
        type:"TRUE_FALSE"
        },
        {
            _id:432,
            question:"DAO stands for Dynamic Access Object.",
            points:10,
            multipleChoice:{},
            trueFalse:{isTrue:false},
            type:"TRUE_FALSE"
        },
        {
            _id:543,
            question:"What does JPA stand for?",
            points:10,
            multipleChoice:{choices:"Java Persistence API,Java Persisted Application,JavaScript Persistence API," +
                    "JSON Persistent Associations",
                correct:1},
            trueFalse:{},
            type:"MULTIPLE_CHOICE"
        },
        {
            _id:654,
            question:"What does ORM stand for?",
            points:10,
            multipleChoice:{choices:"Object Relational Model,Object Relative Markup," +
                    "Object Reflexive Model,Object Relational Mapping",
                correct:4},
            trueFalse:{},
            type:"MULTIPLE_CHOICE"
        }];
    for (var j=0;j<questions.length;j++)
    {
        questionDao.cQuestion(questions[j]);
    }
    var answers=[{
        _id:123,
        student:123,
        question:321,
        trueFalseAnswer:true,
        multipleChoiceAnswer:null,
    },
        {
            _id:234,
            student:123,
            question:432,
            trueFalseAnswer:false,
            multipleChoiceAnswer:null,
        },
        {
            _id:345,
            student:123,
            question:543,
            trueFalseAnswer:null,
            multipleChoiceAnswer:1,
        },
        {
            _id:456,
            student:123,
            question:654,
            trueFalseAnswer:null,
            multipleChoiceAnswer:2,
        },
        {
            _id:567,
            student:234,
            question:321,
            trueFalseAnswer:false,
            multipleChoiceAnswer:null,
        },
        {
            _id:678,
            student:234,
            question:432,
            trueFalseAnswer:true,
            multipleChoiceAnswer:null,
        },
        {
            _id:789,
            student:234,
            question:543,
            trueFalseAnswer:null,
            multipleChoiceAnswer:3,
        },
        {
            _id:890,
            student:234,
            question:654,
            trueFalseAnswer:null,
            multipleChoiceAnswer:24
        }
    ];
    for(var k=0;k<answers.length;k++)
    {
        answerDao.cAnswer(answers[k]);
    }
};

module.exports = {
    populate
};
