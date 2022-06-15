const mongoose = require('mongoose');

const dbConnectionString = 'mongodb://localhost:27017/instagram';

exports.initDatbase = function () {
    return mongoose.connect(dbConnectionString)
};