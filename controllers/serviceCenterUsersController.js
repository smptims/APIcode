'use strict';
(function () {
    const baseControllersql = require('./baseControllersql');
    const table = require('./tables/serviceCenterUsers');
    var config = require("../config.json");
    var sql = require('./common/db.js');
    const logger = new (require('./common/ktclogger'))(__filename);
    var tracer = require('./common/requesttrace');

    module.exports = function (express, app) {
        console.log('calling serviceCenterUsersController...');
		
        //logger.debug('Debugging info');
        var serviceCenterRouter = express.Router();
        app.use('/servicecenterusersapi', serviceCenterRouter);

        // GET METHOD:  this is for Login verification details. 
        //app.get('/servicecenterusersapi/servicecenterusers/basic/details', function (req, res, next) {
		// GET METHOD:  this is for Login verification details. 
        app.get('/servicecenterusersapi/servicecenterusers'+ '/:username' + '/:password', function (req, res, next) {		 	
          let modsql = "SELECT * FROM service_center_users where username = '" + req.params.username +"'" ;
          console.log(" capture sql = "+modsql);
		  
          sql.query(modsql, (err, data) => {
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
            serviceCenterRouter.use(tracer.localLog);
        console.log('calling adminUsers controller');
        return baseControllersql(serviceCenterRouter, sql, table, 'servicecenterusers', logger);
    };
})();