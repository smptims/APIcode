'use strict';
(function () { 
    // GET Item by from 
    module.exports.getItemByIDSQL=function(id){
      //  console.log(obj.did_seq_no);
        let sql = `SELECT * FROM  device_installed_dtls where did_seq_no= ${id}` ;
        return sql;   
    }
	
	
  // GET ALL	
	module.exports.getallSQL= function() {
        let sql = `SELECT * FROM  device_installed_dtls`;
        return sql;           
    }  
    
    

   //POST/ INSERT Item by to 
    module.exports.insertitemSQL=function(obj) {
        console.log(obj.did_seq_no);
        let sql = `insert into device_installed_dtls(pcsd_seq_no, customer_no, device_no, vehicle_regd_no, vehicle_location, installed_by_sc_emp_no, installed_date_time, installation_verified_by, status, rec_create_dt, rec_create_user) values('${obj.pcsd_seq_no}','${obj.customer_no}', '${obj.vehicle_regd_no}','${obj.device_no}', '${obj.vehicle_location}','${obj.installed_by_sc_emp_no}',current_timestamp, ${obj.installation_verified_by}, 'ACTIVE',current_timestamp,user())`;  
      
	   console.log(" generated insert sql =="+sql);
        return sql;           
    } 
 
   // DELETE All from
    module.exports.deleteAllItems= function() {
        let sql = `DELETE FROM  device_installed_dtls `;
        return sql;           
    }
	
   // DELETE Item by from
   module.exports.deleteItemByIdSQL= function(id) {
        console.log("deleting installed device id ===" + id );
        let sql = `DELETE FROM smptims.device_installed_dtls WHERE did_seq_no = ${id}`;
        console.log("deleting installed device id === " + sql);
        return sql;           
}
    
    
    // PUT  update by username -- this is for profile page
    module.exports.updatebyIDSQL=function(obj) {
        console.log(obj.did_seq_no);
        let sql = "update device_installed_dtls set pcsd_seq_no="                   + obj.pcsd_seq_no                 +" , " +
                                                    " customer_no="                 + obj.customer_no                 +" , " +
                                                    " vehicle_regd_no='"             + obj.vehicle_regd_no             +"' , " +
                                                    " device_no='"                   + obj.device_no                   +"' , " +
                                                    " vehicle_location='"            + obj.vehicle_location            +"' , " +
                                                    " installed_by_sc_emp_no='"      + obj.installed_by_sc_emp_no      +"' , " +
                                                    " installed_date_time=date(substr('" + obj.installed_date_time         +"',1,10)) , " +
                                                    " installation_verified_by='"    + obj.installation_verified_by    +"' , " +
                                                    " status='"                      + obj.status                      +"' , " +
                                                    " rec_updt_dt= current_timestamp()"                                +"  , " +
                                                    " rec_updt_user= user() "        +                                     
                                                    " where did_seq_no= "            + obj.did_seq_no ;  
            console.log(" new updated sql=" + sql)                                                      
            return sql; 
    }   
})()