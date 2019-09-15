'use strict';
(function () {
    const baseControllersql = require('./baseControllersql');
    const table = require('./tables/deviceInstalledDailyRpt');
    var config = require("../config.json");
    var sql = require('./common/db.js');
    const logger = new (require('./common/ktclogger'))(__filename);
    // var todoSchema=new mongoose.Schema({
    //     item:String
    // });
    var tracer = require('./common/requesttrace');
    //var Todo=mongoose.model('Todo',todoSchema);

    module.exports = function (express, app) {
        console.log('deviceInstalledDailyRptControllers');
        //logger.debug('Debugging info');
        var deviceInstalledDailyRptRouter = express.Router();
        app.use('/deviceinstalleddailyrptapi', deviceInstalledDailyRptRouter);

        app.get('/deviceinstalleddailyrptapi/deviceinstalleddailyrpt', function (req, res, next) {
            //get data from mongosql and pass it to view
            console.log("hello : /deviceInstalledDailRpt");
			console.log(table.insertitemSQL());
			sql.query(table.insertitemSQL(), (err, data) => {
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
                    res.json(data);
                    res.json({
						"Success": true,
						"ErrorMessage": "Successfully generated and inserted report"
					});
				}
			});
		});  //end of fetch by itemID


        if (config.NODE_ENV == "Development")
        deviceInstalledDailyRptRouter.use(tracer.localLog);
        console.log('calling DailyInstalled Report controller');
        return baseControllersql(deviceInstalledDailyRptRouter, sql, table, 'deviceinstalleddailyrpt', logger);
    };
})();