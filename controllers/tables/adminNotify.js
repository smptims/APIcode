'use strict';
(function () { 
    // INSERT Item by to 
    module.exports.insertitemSQL=function(obj) {
        console.log(obj.admin_notify_seq_no);
        let sql = `insert into admin_noifications(admin_notify_seq_no, text_notify, image_notify,
                  notify_subject, notify_start_dt, notify_end_dt, notify_status ) 
                  values(${obj.admin_notify_seq_no}, '${obj.text_notify}', '${obj.image_notify}', 
                  '${obj.notify_subject}', ${obj.notify_start_dt},${obj.notify_end_dt},'${obj.notify_status}') `;
        return sql;           
    }
    // GET all from
    module.exports.getallSQL= function() {
        let sql = `SELECT * FROM  admin_noifications`;
        return sql;           
    }
    // GET Item by from 
    module.exports.getItemByIDSQL= function(id) {
        let sql = `SELECT (text_notify, image_notify) FROM admin_noifications WHERE admin_notify_seq_no = ${id}`;
        return sql;           
    }
    
     // DELETE All from 
    module.exports.deleteAllItems= function() {
        let sql = `DELETE FROM  admin_noifications `;
        return sql;           
    }

    // DELETE Item by from
    module.exports.deleteItemByIDSQL= function(id) {
        let sql = `DELETE FROM  admin_noifications WHERE admin_notify_seq_no = ${id}`;
        return sql;           
    }
 

    // PUT  update by username -- this is for profile page
    module.exports.updatebyIDSQL=function(obj) {
        console.log(obj.admin_notify_seq_no);
        let sql = "update admin_noifications set text_notify='"             + obj.text_notify           +"' , " +
                                            " notify_subject='"             + obj.notify_subject        +"' , " +
                                            " notify_start_dt='"            + obj.notify_start_dt       +"' , " +
                                            " notify_end_dt='"              + obj.notify_end_dt         +"' , " +
                                            " notify_status='"              + obj.notify_status         +"' , " +
                                            " rec_updt_dt='"                + obj.rec_updt_dt           +"' , " +
                                            " rec_updt_user='"              + obj.rec_updt_user         +"'  "    
                                            " where admin_notify_seq_no= "  + obj.admin_notify_seq_no ;    
            return sql; 
    }    

     

    
      
})();