'use strict';
(function () {
    const baseControllersql = require('./baseControllersql');
    const table = require('./tables/adminNotify');
    var config = require("../config.json");
    var sql = require('./common/db.js');
    const logger = new (require('./common/ktclogger'))(__filename);
    // var todoSchema=new mongoose.Schema({
    //     item:String
    // });
    var tracer = require('./common/requesttrace');
    //var Todo=mongoose.model('Todo',todoSchema);

    module.exports = function (express, app) {
        console.log('adminNotifyController');
        //logger.debug('Debugging info');
        var adminNotifyRouter = express.Router();
        app.use('/adminNotifyapi', adminNotifyRouter);

        app.get('/adminNotifyapi/adminNotify', function (req, res, next) {
            //get data from mongosql and pass it to view
            console.log("hello : /adminNotify");
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
        adminNotifyRouter.use(tracer.localLog);
        console.log('calling adminUsers controller');
        return baseControllersql(adminNotifyRouter, sql, table, 'adminNotify', logger);
    };
})();