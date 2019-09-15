'use strict';
(function () { 
 
    module.exports.getItemByIDSQL=function(id){
        console.log("obj.name=" + `${id}`);
        let sql = "SELECT * FROM  product_order_dtls WHERE pcsd_seq_no = "+ id ;
        return sql;   
    }
	
	
  // GET ALL	
	module.exports.getallSQL= function() {
        let sql = `SELECT * FROM  product_order_dtls`;
        return sql;           
    }  
    
   // POST
    module.exports.insertitemSQL=function(obj) {
        console.log(obj.customer_no);
        let sql = `insert into product_order_dtls(customer_no, prod_code, device_no, manuf_dt, sales_dt,warranty_period,service_required,warranty_dt,next_service_dt, status, rec_create_dt, rec_create_user) \
                   values('${obj.customer_no}','${obj.prod_code}', '${obj.device_no}', '${obj.manuf_dt}', '${obj.sales_dt}',${obj.warranty_period},'${obj.service_required}','${obj.warranty_dt}','${obj.next_service_dt}','ACTIVE',current_timestamp, user())`;
        return sql;           
    } 
   

   // DELETE by customer_no  deleteItemByIdSQL
    module.exports.deleteItemByIdSQL= function(id) {
		console.log("deleting customer_no..." + `${id}`);
        let sql = "DELETE FROM product_order_dtls WHERE pcsd_seq_no = "+ id ;
        return sql;           
    }
	
	// PUT  update by customer_no -- this is for profile page
	module.exports.updatebyIDSQL=function(obj) {
        console.log(obj.device_no);
        let sql = "update product_order_dtls set  prod_code='"  + obj.prod_code       +"', " +
		                                       "device_no='"  + obj.device_no       +"', " +
                                          	   "manuf_dt='"   + obj.manuf_dt        +"' , " +
											   "sales_dt='"   + obj.sales_dt        +"', " +
									    "warranty_period="    + obj.warranty_period +", " +
									        "warranty_dt='"   + obj.warranty_dt     +"', " +
										"next_service_dt='"   + obj.next_service_dt +"', " +											
									   "service_required='"   + obj.service_required+"' "	+								
				  " WHERE pcsd_seq_no = "+ obj.pcsd_seq_no ;
        return sql;           
    }
	
})();