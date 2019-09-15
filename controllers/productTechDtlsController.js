'use strict';
(function(){
    const baseControllersql = require('./baseControllersql');    
    const table=require('./tables/productTechDtls');
    var config = require("../config.json");
    var sql = require('./common/db.js');
    const logger = new (require('./common/ktclogger'))(__filename);
    var tracer=require('./common/requesttrace');
     
    module.exports=function(express,app){
        console.log('calling productTechDtlsController...');
		
        //logger.debug('Debugging info');
        var productTechDtlsRouter=express.Router();
        app.use('/producttechdtlsapi', productTechDtlsRouter);
		
		// GET METHOD:  this is for Login verification details. 
        app.get('/producttechdtlsapi/producttechdtls'+ '/:deviceno', function (req, res, next) {		 	
          let modsql = "SELECT * FROM product_tech_dtls where device_no = '" + deviceno +"'" ;
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
           productTechDtlsRouter.use(tracer.localLog);
           console.log('calling producttechdtls controller');
           return baseControllersql(productTechDtlsRouter,sql,table,'producttechdtls',logger);		    
    };
})();