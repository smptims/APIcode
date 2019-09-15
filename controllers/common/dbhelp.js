'use strict';
(function () {
    const logger = new (require('./ktclogger'))(__filename);
    const config = require("../../config.json");
    const mongoose = require("mongoose");
    //mongoose.connect("mongodb://ds052978.mlab.com:52978/tododb", { mongodb://127.0.0.1:27017
    mongoose.connect(config.mongourl, { useNewUrlParser: true }).then(() => {
        //mongoose.connect("mongodb://127.0.0.1:27017", {useNewUrlParser:true}).then(() => { 
        logger.loginfo("MySQL db Database connected");
    },
        err => {
            /** handle initial connection error */
            logger.loginfo("Error in database connection. ", err);
        }
    );
    mongoose.Promise = global.Promise;

    module.exports = mongoose;
})();