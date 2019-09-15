'use strict';
(function(){
    const baseControllersql = require('./baseControllersql');    
    const table  = require('./tables/referTravels');
    var   config = require("../config.json");
    var   sql    = require('./common/db.js');
    const logger = new (require('./common/ktclogger'))(__filename);
    var   tracer = require('./common/requesttrace');
     
    module.exports=function(express,app){
        console.log('calling referTravelsRouter...');
		
        //logger.debug('Debugging info');
        var referTravelsRouter=express.Router();
        app.use('/refertravelsapi', referTravelsRouter);
		
		// GET METHOD:  this is for Login verification details. 
        app.get('/refertravelsapi/refertravels'+ '/:customerno', function (req, res, next) {		 	
          let modsql = "SELECT * FROM refer_travels where customer_no = '" + customerno +"'" ;
          console.log(" capture sql = "+modsql);
		  
          sql.query(modsql, (err, data) => {
			   if (err) { 
					console.log(" Internal system error ");
					res.json({ 	"Success":		false,
								"Message":	"Error 400: Internal system error" });	 
					next();
			     }else { 
 				    res.status(200);
					res.json({ 	"Success":		true,
								"Message":	"Successfully retrieved data" });
				}
			});	// end of SQL query run
		  }); // END OF GET METHOD		  

		if(config.NODE_ENV=="Development")
           referTravelsRouter.use(tracer.localLog);
           console.log('calling referTravels controller');
           return baseControllersql(referTravelsRouter,sql,table,'refertravels',logger);		    
    };
})();