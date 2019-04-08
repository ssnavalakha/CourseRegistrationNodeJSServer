const universityDAO = require('../dao/university.dao.server');
createDatabase = (req, res) => {
        universityDAO.populate();
};
module.exports = {
    createDatabase
}
