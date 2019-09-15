'use strict';
(function () {
	const baseControllersql = require('./baseControllersql');
	const table = require('./tables/adminUsers');
	var config = require("../config.json");
	const sql = require('./common/db.js');
	const logger = new (require('./common/ktclogger'))(__filename);
	var tracer = require('./common/requesttrace');

	module.exports = function (express, app) {
		var adminUsersRouter = express.Router();
		app.use('/adminusersapi', adminUsersRouter);

		// GET METHOD:  this is for Login verification details. 
		app.get('/adminusersapi/adminusers' + '/:username' + '/:password', function (req, res, next) {
			let modsql = `SELECT * FROM admin_users where username = '${req.params.username}'`;
			console.log(" 1.0 capture sql = " + modsql );			 
			sql.query(modsql, (err, data) => {
				console.log('::::::::::::::::::Entered to sql query:::::::::::::::::::::::::::::::::::')
				if (err) {
 					// IF - 1
					console.log('::::::::::::::::::::::::::::IF ::::::::::::::::::::::::::')
					res.json({
						"Success": false,
						"ErrorMessage": "Error 400: Internal system error"
					});
 					// throw err;
					next();
				} else {
					console.log('::::::::::::::::::::else ::::::::::::::::::::::::::::::')
					/* ELSE of IF ... When username exists condition */
					if (data.length > 0) {
						/* login successful condition */
						if (data[0].password === req.params.password) {
							res.json({
								"Success": true,
								"ErrorMessage": "Login is Successfully"
							});					
						}
						else {
							res.json({
								"Success": false,
								"ErrorMessage": " Password does not match"
							});
						//	throw err;	
						}
					}
					else {
						res.json({
							"Success": false,
							"ErrorMessage": " Username does not exists "
						})
						// throw err;
					}
				}  // end of ELSE condition for IF - 1
				 
			});	// end of SQL query run
			 
		}); // END OF GET METHOD
		

		if (config.NODE_ENV == "Development")
			adminUsersRouter.use(tracer.localLog);
		console.log('calling adminUsers controller');
		return baseControllersql(adminUsersRouter, sql, table, 'adminusers', logger);
	};
})();