'use strict';
(function () {
    const baseControllersql = require('./baseControllersql');
    const table = require('./tables/customerUsers');
    var config = require("../config.json");
    var sql = require('./common/db.js');
    const logger = new (require('./common/ktclogger'))(__filename);
    var tracer = require('./common/requesttrace');
    
    module.exports = function (express, app) {
        console.log('customerUsersController');
        //logger.debug('Debugging info');
        var customerUsersRouter = express.Router();
        app.use('/customerusersapi', customerUsersRouter);

        // GET METHOD:  this is for Login verification details. 
       
        app.get('/customerusersapi/customerusers'+ '/:customer_no' + '/:password', function (req, res, next) {		 	
           
			let modsql = `SELECT * FROM customer_users where customer_no = '${req.params.customer_no}'`;
            console.log(" capture sql = "+modsql);
            
            sql.query(modsql, (err, data) => {
              if (err) {
                  // IF - 1
                 console.log('::::::::::::::::::::::::::::IF ::::::::::::::::::::::::::')
                 res.json({
                     "Success": false,
                     "Message": "Error 400: Internal system error"
                 });
                  // throw err;
                 next();
             } else {
                 console.log('::::::::::::::::::::else ::::::::::::::::::::::::::::::')
                 /* ELSE of IF ... When customer_no exists condition */
                 if (data.length > 0) {
                     /* login successful condition */
                     if (data[0].password === req.params.password) {
                         res.json({
                             "Success": true,
                             "Message": "Login is Successfully"
                         });					
                     }
                     else {
                         res.json({
                             "Success": false,
                             "Message": " Password does not match"
                         });
                     //	throw err;	
                     }
                 }
                 else {
                     res.json({
                         "Success": false,
                         "Message": " customer_no does not exists "
                     })
                     // throw err;
                 }
             }  // end of ELSE condition for IF - 1
            
			});	// end of SQL query run
            
		}); // END OF GET METHOD


        if (config.NODE_ENV == "Development")
        customerUsersRouter.use(tracer.localLog);
        console.log('calling Customer Users controller');
        return baseControllersql(customerUsersRouter, sql, table, 'customerusers', logger);
    };
})();