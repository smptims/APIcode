'use strict';
(function () {
    const baseControllersql = require('./baseControllersql');
    const table = require('./tables/deviceStatusRpt');
    var config = require("../config.json");
    var sql = require('./common/db.js');
    const logger = new (require('./common/ktclogger'))(__filename);
 
    var tracer = require('./common/requesttrace');
 
    module.exports = function (express, app) {
        console.log('deviceStatusRptController.....');
        //logger.debug('Debugging info');
        var deviceStatusRptRouter = express.Router();
        app.use('/devicestatusrptapi', deviceStatusRptRouter);

        app.get('/devicestatusrptapi/devicestatusrpt' + '/:itemID', function (req, res, next) {
            console.log(" 9.0 value of the itemID=" + `${req.params.itemID}`);
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
                     //res.json({data});
					res.json({
						"Success": true,
						"ErrorMessage": "Successfully displayed data"
					});
				}
			});
		});  //end of GET method by itemID

        app.get('/devicestatusrptapi/devicestatusrpt' + '/:fromdate' + '/:todate', function (req, res, next) {
            console.log(" 9.0 value of the fromdate=" + `${req.params.fromdate}` + " of the todate=" + `${req.params.todate}`);
			sql.query(table.getItemByDatesSQL(req.params.fromdate, req.params.todate), (err, data) => {
				console.log('::::::::::::::::::Entered to sql query:::::::::::::::::::::::::::::::::::');
            if (data.length > 0){
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
                     res.json({data});
					res.json({
						"Success": true,
						"ErrorMessage": "Successfully displayed data"
					});
                }
            } 
            else {
                res.json({
                    "Success": true,
                    "ErrorMessage": "No data available"
                });                
            }    
            });
		});  //end of GET method by itemID


        if (config.NODE_ENV == "Development")
        deviceStatusRptRouter.use(tracer.localLog);
        console.log('calling Device status Reports controller' + sql);
        return baseControllersql(deviceStatusRptRouter, sql, table, 'deviceStatusRpt', logger);
    };
})();