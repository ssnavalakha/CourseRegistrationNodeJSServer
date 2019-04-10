const universityDAO = require('../dao/university.dao.server');
createDatabase = (req, res) => {
    res.json(universityDAO.populate());
};
truncateDatabase =(req,res)=>{
    res.json(universityDAO.deleteEverything())
}
module.exports = {
    createDatabase,
    truncateDatabase
}
