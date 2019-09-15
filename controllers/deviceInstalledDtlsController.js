'use strict';
(function () {
    const baseControllersql = require('./baseControllersql');
    const table = require('./tables/deviceInstalledDtls');
    var config = require("../config.json");
    var sql = require('./common/db.js');
    const logger = new (require('./common/ktclogger'))(__filename);
    // var todoSchema=new mongoose.Schema({
    //     item:String
    // });
    var tracer = require('./common/requesttrace');
    //var Todo=mongoose.model('Todo',todoSchema);

    module.exports = function (express, app) {
        console.log('deviceInstalledDtlsController');
        //logger.debug('Debugging info');
        var deviceInstalledDtlsRouter = express.Router();
        app.use('/deviceinstalleddtlsapi', deviceInstalledDtlsRouter);

        app.get('/deviceinstalleddtlsapi/deviceinstalleddtls', function (req, res, next) {
            //get data from mongosql and pass it to view
            console.log("hello : /deviceInstalledDtls");
			console.log(table.getItemByIDSQL());
			sql.query(table.getItemByIDSQL(), (err, data) => {
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
        deviceInstalledDtlsRouter.use(tracer.localLog);
        console.log('calling adminUsers controller');
        return baseControllersql(deviceInstalledDtlsRouter, sql, table, 'deviceinstalleddtls', logger);
    };
})();