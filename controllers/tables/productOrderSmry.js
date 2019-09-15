'use strict';
(function () { 
 
    module.exports.getItemByIDSQL=function(id){
        console.log("obj.name=" + `${id}`);
        let sql = "SELECT * FROM  product_order_smry WHERE css_seq_no = "+ id +"";
        return sql;   
    }
	
	
  // GET ALL	
	module.exports.getallSQL= function() {
        let sql = `SELECT * FROM  product_order_smry`;
        return sql;           
    }  
    
   // POST
    module.exports.insertitemSQL=function(obj) {
        console.log(obj.phone_no);
        let sql = `insert into product_order_smry(customer_no, sales_dt, invoice_no, invoice_dt,  invoice_amt, no_of_devices_sold, amt_paid_f, purchase_order_copy, status, rec_create_dt, rec_create_user) values(${obj.customer_no}, '${obj.sales_dt}', '${obj.invoice_no}', '${obj.invoice_dt}', '${obj.invoice_amt}',  '${obj.no_of_devices_sold}', '${obj.amt_paid_f}',  '${obj.purchase_order_copy}',  'ACTIVE', current_timestamp, user())`;
        return sql;           
    } 
   

   // DELETE by customerno  deleteItemByIdSQL
    module.exports.deleteItemByIdSQL= function(id) {
		console.log("deleting customerno..." + `${id}`);
        let sql = "DELETE FROM product_order_smry WHERE css_seq_no = "+ id +" ";
        return sql;           
    }
	
	// PUT  update by customerno -- this is for profile page
	module.exports.updatebyIDSQL=function(obj) {
        console.log(obj.css_seq_no);
        let sql = "update product_order_smry set  sales_dt='"  + obj.sales_dt           +"' , " +
                                               "invoice_no='"  + obj.invoice_no         +"' , " +
                                               "invoice_dt='"  + obj.invoice_dt         +"', " +
                                              "invoice_amt="  + obj.invoice_amt         +", " +
                                       "no_of_devices_sold="  + obj.no_of_devices_sold  +", " +
                                               "amt_paid_f='"  + obj.amt_paid_f         +"', " +
                                      "purchase_order_copy='"  + obj.purchase_order_copy+"' " +  					
                    " where css_seq_no ="+ obj.css_seq_no +" ";					 
        return sql;           
    }
	
})();