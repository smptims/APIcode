'use strict';
(function () { 
 
    module.exports.getItemByIDSQL=function(id){
        console.log("obj.name=" + `${id}`);
        let sql = `SELECT * FROM  service_center_users WHERE  sc_seq_no = ${id}`;
        return sql;   
    }
	
	
  // GET ALL	
	module.exports.getallSQL= function() {
        let sql = `SELECT * FROM  service_center_users`;
        return sql;           
    }  
    
   // POST
    module.exports.insertitemSQL=function(obj) {
        console.log(obj.customer_name);
        let sql = `insert into service_center_users(sc_emp_no,customer_name, username, password,email,phone_no, location , status,  rec_create_dt, rec_create_user) values(${obj.sc_emp_no},'${obj.customer_name}', '${obj.customer_name}', 'default','${obj.email}', ${obj.phone_no}, '${obj.location}','ACTIVE',current_timestamp, user())`;
        return sql;           
    } 
   

   // DELETE by customerno  deleteItemByIdSQL
    module.exports.deleteItemByIdSQL= function(id) {
		console.log("deleting customer service_no..." + `${id}`);
        let sql = `DELETE FROM service_center_users WHERE sc_seq_no = ${id}`;
        return sql;           
    }
	
    // PUT update by customerno -- this is for profile page
    module.exports.updatebyIDSQL=function(obj) {
        console.log(obj.sc_seq_no);
        let sql = "update service_center_users set  customer_name='" + obj.customer_name      +"' , " +
                                        "username='"       + obj.username             +"' , " +   
                                        "company_name='"   + obj.company_name         +"' , " +
                                        "password='"       + obj.password             +"' , " +
                                        "email='"          + obj.email                +"' , " + 
                                        "phone_no="        + obj.phone_no             +" , " + 
                                        "address='"        + obj.address              +"' , " +
                                        "location='"       + obj.location             +"' , " +
                                        "pincode_zip='"    + obj.pincode_zip          +"' , " + 
                                        "country='"        + obj.country              +"' , " + 
                                        "status='"         + obj.status               +"' , " + 
                                        " rec_updt_dt= current_timestamp()" +" , " +
                                        " rec_updt_user = user()" +" " +
                                        " WHERE sc_seq_no = "+ obj.sc_seq_no +"";
        console.log(" new updated sql=" + sql);        
        return sql;
    } 
	
})();