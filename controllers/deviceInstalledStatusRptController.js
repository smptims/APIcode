'use strict';
(function () {
    const baseControllersql = require('./baseControllersql');
    const table = require('./tables/deviceInstalledStatusRpt');
    var config = require("../config.json");
    var sql = require('./common/db.js');
    const logger = new (require('./common/ktclogger'))(__filename);

    var tracer = require('./common/requesttrace');

    module.exports = function (express, app) {
        console.log('deviceInstalledStatusRptController.....');
        //logger.debug('Debugging info');
        var deviceInstalledStatusRptRouter = express.Router();
        app.use('/deviceinstalledstatusrptapi', deviceInstalledStatusRptRouter);

        app.get('/deviceinstalledstatusrptapi/deviceinstalledstatusrpt' + '/:fromdate' + '/:todate', function (req, res, next) {
            console.log(" 9.0 value of the fromdate=" + `${req.params.fromdate}` + " todate=" + `${req.params.todate}`);
            let modsql = `SELECT * FROM  device_installed_dtls WHERE status = 'INSTALLED' and DATE(substr(installed_date_time,1,10)) between STR_TO_DATE('${req.params.fromdate}', '%Y-%m-%d') and  STR_TO_DATE('${req.params.todate}', '%Y-%m-%d')`;
            console.log(" new sql = " + modsql);
            sql.query(modsql, (err, data) => {
                console.log('::::::::::::::::::Entered to sql query:::::::::::::::::::::::::::::::::::');
                if (err) {
                    console.log("error: ", err);
                    res.json({
                        "Success": false,
                        "ErrorMessage": "Error 400: Internal system error"
                    });
                    next();
                }
                else {
                    res.status(200);
                    // res.json({ data });
                    res.json({
                        "data": data,
                        "Success": true,
                        "ErrorMessage": "Successfully displayed data"
                    });
                }
            });
        });  //end of GET method by itemID

        if (config.NODE_ENV == "Development")
            deviceInstalledStatusRptRouter.use(tracer.localLog);
        console.log('calling deviceInstalledStatusRptRouter' + sql);
        return baseControllersql(deviceInstalledStatusRptRouter, sql, table, 'deviceinstalledstatusrpt', logger);
    };
})();