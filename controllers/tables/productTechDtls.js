'use strict';
(function () { 
 
    module.exports.getItemByIDSQL=function(id){
        console.log("productDetails: prod_seq_no=" + `${id}`);
        let sql = "SELECT * FROM  product_tech_dtls WHERE prod_seq_no = "+ id +"";
        return sql;   
    }
	
	
  // GET ALL	
	module.exports.getallSQL= function() {
        let sql = `SELECT * FROM  product_tech_dtls`;
        return sql;           
    }  
    
   // POST
    module.exports.insertitemSQL=function(obj) {
        console.log(obj.device_no);
        let sql = `insert into product_tech_dtls(prod_code, device_no, manuf_dt, ird_no, ivr_no, status, rec_create_dt, rec_create_user) \
                   values('${obj.prod_code}','${obj.device_no}', ${obj.manuf_dt}, '${obj.ird_no}','${obj.ivr_no}','ACTIVE',current_timestamp, user())`;
        return sql;           
    } 
   

   // DELETE by device_no  deleteItemByIdSQL
    module.exports.deleteItemByIdSQL= function(id) {
		console.log("deleting device_no..." + `${id}`);
        let sql = "DELETE FROM product_tech_dtls WHERE prod_seq_no = "+ id +"";
        return sql;           
    }
	
	// PUT  update by device_no -- this is for profile page
	module.exports.updatebyIDSQL=function(obj) {
        console.log(obj.device_no);
        let sql = "update product_tech_dtls set device_no='"  + obj.device_no +"' , " +
											   "prod_code='" + obj.prod_code +"', " +
											   "manuf_dt="  + obj.manuf_dt  +", " +
											     "ird_no='"  + obj.ird_no    +"', " +
											     "ivr_no='"  + obj.ivr_no    +"'  "  + 											
				  " where prod_seq_no = "+ obj.prod_seq_no +"";
        return sql;           
    }
	
})();