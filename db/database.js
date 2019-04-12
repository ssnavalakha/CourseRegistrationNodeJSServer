module.exports = function () {
    const mongoose = require('mongoose');
    const databaseName = 'white-board';
    var   connectionString =
        process.env.MONGOLAB_URI;
    //connectionString += databaseName;
    mongoose.connect(connectionString);
};
