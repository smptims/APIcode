'use strict';
(function () { 
 
    // POST/ INSERT Item by to 
    module.exports.insertitemSQL=function(obj) {
        let sql = `INSERT INTO  device_installed_hist_rpt(dihr_seq_no, customer_no, customer_name, device_no, vehicle_regd_no,
                    device_install_dt, device_install_by, installation_verified_by, installed_location, status,
                    rec_create_dt, rec_create_user ) 
                   VALUES(${obj.dihr_seq_no}, '${obj.customer_no}', '${obj.customer_name}', '${obj.device_no}', '${obj.vehicle_regd_no}', 
                   '${obj.device_install_dt}', '${obj.device_install_by}', '${obj.installation_verified_by}', '${obj.installed_location}', 
                   '${obj.status}', current_timestamp, user() )`;
        return sql;           
    }
    // GET all from
    module.exports.getallSQL= function() {
        let sql = `SELECT * FROM  device_installed_hist_rpt`; 
        return sql;           
    }
     // GET Item by from 
    module.exports.getItemByIDSQL= function(id) {
        let sql = `SELECT * FROM device_installed_hist_rpt WHERE dihr_seq_no = ${id}`;
        return sql;           
    }
    
     // DELETE All from
     module.exports.deleteAllItems= function() {
        let sql = `DELETE FROM  device_installed_hist_rpt `;
        return sql;           
    }

    // DELETE Item by from
    module.exports.deleteItemByIDSQL= function(id) {
        let sql = `DELETE FROM  device_installed_hist_rpt WHERE dihr_seq_no = ${id}`;
        return sql;           
    }
 
    // PUT  update by username -- this is for profile page
    module.exports.updatebyIDSQL=function(obj) {
        console.log(obj.dihr_seq_no);
        let sql = "update device_installed_hist_rpt set  customer_no='"                        + obj.customer_no                       +"' , " +
                                                        " customer_name='"                      + obj.customer_name                     +"' , " +
                                                        " device_no='"                          + obj.device_no                         +"' , " +
                                                        " vehicle_regd_no='"                    + obj.vehicle_regd_no                   +"' , " +
                                                        " device_install_dt='"                  + obj.device_install_dt                 +"' , " +
                                                        " device_install_by='"                  + obj.device_install_by                 +"' , " +
                                                        " installation_verified_by='"           + obj.installation_verified_by          +"' , " +
                                                        " installed_location='"                 + obj.installed_location                +"' , " +
                                                        " status='"                             + obj.status                            +"' , " +
                                                        " rec_updt_dt='"                        + obj.rec_updt_dt                       +"' , " +
                                                        " rec_updt_user='"                      + obj.rec_updt_user                     +"'  "    
                                                        " where dihr_seq_no= "                  + obj.dihr_seq_no ; 
                                                                                                    
    return sql; 
    }
    

})();