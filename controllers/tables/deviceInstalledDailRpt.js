'use strict';
(function () { 
 
    // POST/ INSERT Item by to 
    module.exports.insertitemSQL=function(obj) {
        let sql = `INSERT INTO  device_installed_daily_rpt (didr_seq_no, customer_no, customer_name, device_no, vehicle_regd_no,
                    device_install_dt, device_installed_srvc_username, installation_verified_by_custname, installed_location, status,
                    rec_create_dt, rec_create_user ) values(${obj.didr_seq_no}, ${obj.customer_no}, '${obj.customer_name}', '${obj.device_no}', '${obj.vehicle_regd_no}', 
                   current_timestamp, '${obj.device_installed_srvc_username}', '${obj.installation_verified_by_custname}', '${obj.installed_location}', '${obj.status}', 
                   current_timestamp, user())`;
        return sql;           
    }

    // GET all from
    module.exports.getallSQL= function() {
        let sql = `SELECT * FROM  device_installed_daily_rpt`; 
        return sql;           
    }
     // GET Item by from 
    module.exports.getItemByIDSQL= function(id) {
        let sql = `SELECT * FROM  device_installed_daily_rpt WHERE didr_seq_no = ${id}`;
        return sql;           
    }
    
     // DELETE All from
     module.exports.deleteAllItems= function() {
        let sql = `DELETE FROM  device_installed_daily_rpt `;
        return sql;           
    }

    // DELETE Item by from
    module.exports.deleteItemByIDSQL= function(id) {
        console.log("deleting user..." + `${id}`);
        let sql = `DELETE FROM  device_installed_daily_rpt WHERE didr_seq_no = ${id}`;
        return sql;           
    }
 
     // PUT  update by username -- this is for profile page
    module.exports.updatebyIDSQL=function(obj) {
        console.log(obj.didr_seq_no);
        let sql = "update device_installed_daily_rpt set  customer_no='"                        + obj.customer_no                       +"' , " +
                                                        " customer_name='"                      + obj.customer_name                     +"' , " +
                                                        " device_no='"                          + obj.device_no                         +"' , " +
                                                        " vehicle_regd_no='"                    + obj.vehicle_regd_no                   +"' , " +
                                                        " device_install_dt='"                  + obj.device_install_dt                 +"' , " +
                                                        " device_installed_srvc_username='"     + obj.device_installed_srvc_username    +"' , " +
                                                        " installation_verified_by_custname='"  + obj.installation_verified_by_custname +"' , " +
                                                        " installed_location='"                 + obj.installed_location                +"' , " +
                                                        " status='"                             + obj.status                            +"' , " +
                                                        " rec_updt_dt='"                        + obj.rec_updt_dt                       +"' , " +
                                                        " rec_updt_user='"                      + obj.rec_updt_user                     +"'  "    
                                                        " where didr_seq_no= "                  + obj.didr_seq_no ; 
                                                                                                    
    return sql; 
    }   

    

})();