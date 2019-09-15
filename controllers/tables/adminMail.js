'use strict';
(function () { 
 
    // POST/ INSERT Item by to 
    module.exports.insertitemSQL=function(obj) {
        let sql = `insert into  admin_send_mail(mail_seq_no, mail_from, mail_to, mail_subject, mail_discription,
                   mail_send_dt,  rec_create_dt, rec_create_user) \
                   values (${obj.mail_seq_no}, '${obj.mail_from}', '${obj.mail_to}', '${obj.mail_subject}', '${obj.mail_discription}', 
                   current_timestamp, current_timestamp, user() )`;
        return sql;           
    }
    // GET all from
    module.exports.getallSQL= function() {
        let sql = `SELECT * FROM  admin_send_mail`; 
        return sql;           
    }
     // GET Item by from 
    module.exports.getItemByIDSQL= function(id) {
        let sql = `SELECT * FROM  admin_send_mail WHERE mail_seq_no = ${id}`;
        console.log(" new SQL="+sql);
        return sql;           
    }
    
     // DELETE All from
    module.exports.deleteAllItems= function() {
        let sql = `DELETE FROM  admin_send_mail `;
        return sql;           
    }

    // DELETE Item by from
    module.exports.deleteItemByIDSQL= function(id) {
        let sql = `DELETE FROM  admin_send_mail WHERE mail_seq_no = ${id}`;
        return sql;           
    }
 
    // PUT  update by username -- this is for profile page
    
    module.exports.updatebyIDSQL=function(obj) {
        console.log(obj.mail_seq_no);
        let sql = "update admin_send_mail set mail_to='"            + obj.mail_to           +"' , " +
                                            " mail_subject='"       + obj.mail_subject      +"' , " +
                                            " mail_discription='"   + obj.mail_discription  +"' , " +
                                            " rec_updt_dt='"        + obj.rec_updt_dt       +"' , " +
                                            " rec_updt_user='"      + obj.rec_updt_user     +"'  "    
                                            " where mail_seq_no= "  + obj.mail_seq_no ;    
            return sql; 
    }        


    

})();