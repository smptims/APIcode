'use strict';
(function () { 
    
     // GET Item by from 
    module.exports.getItemByIDSQL=function(id){
     //   console.log(obj.cust_seq_no);
        let sql = `SELECT * FROM  customer_users where customer_no = ${id}`;
        return sql;   
    }
	
	
    // GET ALL	
	module.exports.getallSQL= function() {
        let sql = `SELECT * FROM  customer_users`;
        return sql;           
    }  
    
    
    //  POST/ INSERT Item by to  
    module.exports.insertitemSQL=function(obj) {
        console.log(obj.customer_name);
        let sql = `insert into customer_users( customer_no, customer_name, password, email, phone_no, 
                     location,  status, rec_create_dt, rec_create_user) 
                   values (111, '${obj.customer_name}', 'default','${obj.email}', '${obj.phone_no}',
                    '${obj.location}',   'ACTIVE', current_timestamp,user())`;
                   console.log(" generated insert sql =="+sql);
        return sql;           
    } 
   
   // DELETE All from 
    module.exports.deleteAllItems= function() {
        let sql = `DELETE FROM  customer_users `;
        return sql;           
    }
	
    // DELETE by username  deleteItemByIdSQL
    module.exports.deleteItemByIdSQL = function (id) {
        console.log(" deleting customer_users for customer_no =" + id);
        let sql = `DELETE FROM  smptims.customer_users WHERE cust_seq_no = ${id}`;
        console.log(" deleting sql=== " + sql);
        return sql;
    }
     
    
    
// PUT  update by username -- this is for profile page
module.exports.updatebyIDSQL=function(obj) {
    console.log(obj.customer_no);
    let sql = "update customer_users set customer_img='"            + obj.customer_img         +"' , " +
                                        " customer_name='"          + obj.customer_name        +"' , " +
                                        " password='"               + obj.password             +"' , " +
                                        " email='"                  + obj.email                +"' , " +
                                        " phone_no="                + obj.phone_no             +"  , " +
                                        " address='"                + obj.address              +"' , " +
                                        " pincode_zip_cd='"         + obj.pincode_zip_cd       +"' , " +
                                        " country='"                + obj.country              +"' , " +
                                        " status='"                 + obj.status               +"' , " +
                                        " location='"               + obj.location             +"' , " +
                                        " rec_updt_dt= current_timestamp()"  +" , " +
                                        " rec_updt_user = user()"  +"  " +
                                        " where customer_no= "      + obj.customer_no ;    
        console.log('updated SQL=' + sql) ;                               
        return sql; 
} 
	
	
})();