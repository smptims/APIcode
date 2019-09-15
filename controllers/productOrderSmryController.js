'use strict';
(function(){
    const baseControllersql = require('./baseControllersql');    
    const table=require('./tables/productOrderSmry');
    var config = require("../config.json");
    var sql = require('./common/db.js');
    const logger = new (require('./common/ktclogger'))(__filename);
    var tracer=require('./common/requesttrace');
     
    module.exports=function(express,app){
        console.log('calling productOrderSmryRouter...');
		
        //logger.debug('Debugging info');
        var productOrderSmryRouter=express.Router();
        app.use('/productordersmryapi', productOrderSmryRouter);
		
		// GET METHOD:  this is for Login verification details. 
        app.get('/productordersmryapi/productordersmry'+ '/:customerno', function (req, res, next) {		 	
          let modsql = "SELECT * FROM product_order_smry where customer_no = '" + customerno +"'" ;
          console.log(" capture sql = "+modsql);
		  
          sql.query(modsql, (err, data) => {
			   if (err) { 
					console.log(" Internal system error ");
					res.json({ 	"Success":		false,
								"ErrorMessage":	"Error 400: Internal system error" });								
					throw err;                     
					next();
			     }else { 
				    console.log('output data : ', data);
				    res.status(200);
					res.json({data })
				}
			});	// end of SQL query run
		  }); // END OF GET METHOD		  

		if(config.NODE_ENV=="Development")
           productOrderSmryRouter.use(tracer.localLog);
           console.log('calling productOrdersmry controller');
           return baseControllersql(productOrderSmryRouter,sql,table,'productordersmry',logger);		    
    };
})();