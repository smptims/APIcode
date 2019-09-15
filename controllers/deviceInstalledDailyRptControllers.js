'use strict';
(function () {
    const baseControllersql = require('./baseControllersql');
    const table = require('./tables/deviceInstalledDailRpt');
    var config = require("../config.json");
    var sql = require('./common/db.js');
    const logger = new (require('./common/ktclogger'))(__filename);
    // var todoSchema=new mongoose.Schema({
    //     item:String
    // });
    var tracer = require('./common/requesttrace');
    //var Todo=mongoose.model('Todo',todoSchema);

    module.exports = function (express, app) {
        console.log('deviceInstalledDailRptControllers');
        //logger.debug('Debugging info');
        var deviceInstalledDailRptRouter = express.Router();
        app.use('/deviceinstalleddailrptapi', deviceInstalledDailRptRouter);

        app.get('/deviceinstalleddailrptapi/deviceinstalleddailrpt', function (req, res, next) {
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
					console.log('tasks : ', data);
					// message:"Products listed.",
					res.status(200);
					res.json(data);
				}
			});
		});  //end of fetch by itemID


        if (config.NODE_ENV == "Development")
        deviceInstalledDailRptRouter.use(tracer.localLog);
        console.log('calling adminUsers controller');
        return baseControllersql(deviceInstalledDailRptRouter, sql, table, 'deviceInstalledDailRpt', logger);
    };
})();