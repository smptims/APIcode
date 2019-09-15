'use strict';
(function () { 
 
     // GET all from
    module.exports.getallSQL= function() {
        let sql = `SELECT * FROM  admin_send_sms`; 
        return sql;           
    }
    // GET Item by from 
    module.exports.getItemByIDSQL= function(id) {
        let sql = `SELECT * FROM  admin_send_sms WHERE sms_seq_no = ${id}`;
        return sql;           
    }
    
    // DELETE All from
    module.exports.deleteAllItems= function() {
        let sql = `DELETE FROM  admin_send_sms `;
        return sql;           
    }
    // DELETE Item by from
    module.exports.deleteItemByIDSQL= function(id) {
        let sql = `DELETE FROM  admin_send_sms WHERE sms_seq_no = ${id}`;
        return sql;           
    }
 
        
    // POST/ INSERT Item by to 
    module.exports.insertitemSQL=function(obj) {
        let sql = `INSERT INTO  admin_send_sms(sms_seq_no, sms_from, sms_to, sms_discription, sms_send_dt,
                   rec_create_dt, rec_create_user) \
                   VALUES(${obj.sms_seq_no}, '${obj.sms_from}', ${obj.sms_to}, '${obj.sms_discription}', 
                   '${obj.sms_send_dt}', current_timestamp, user() )`;
        return sql;           
    }

    // PUT  update by username -- this is for profile page
    module.exports.updatebyIDSQL=function(obj) {
        console.log(obj.sms_seq_no);
        let sql = "update admin_send_sms set  sms_to='"                 + obj.sms_to              +"' , " +
                                            " sms_discription='"        + obj.sms_discription     +"' , " +
                                            " sms_send_dt='"            + obj.sms_send_dt         +"' , " +
                                            " rec_updt_dt='"            + obj.rec_updt_dt         +"' , " +
                                            " rec_updt_user='"          + obj.rec_updt_user       +"'  "    
                                            " where sms_seq_no= "       + obj.sms_seq_no ;    
            return sql; 
    }       

})();