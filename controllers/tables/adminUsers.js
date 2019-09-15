'use strict';
(function () {

    module.exports.getItemByIDSQL = function (id) {
        console.log("obj.name=" + `${id}`);
        let sql = `SELECT * FROM  admin_users WHERE au_seq_no= ${id} `;
        console.log("sql query to select by itemid=" + sql);
        return sql;
    }

    // GET ALL	
    module.exports.getallSQL = function () {
        let sql = `SELECT * FROM  admin_users`;
        return sql;
    }

    // POST
    module.exports.insertitemSQL = function (obj) {
        console.log(obj.phone_no);
        let sql = `insert into smptims.admin_users(au_seq_no, username, password, email, phone_no, status, rec_create_dt, rec_create_user) \
                   values(${obj.au_seq_no}, '${obj.username}', '${obj.password}', '${obj.email}', ${obj.phone_no},'${obj.status}',current_timestamp,user())`;
        return sql;
    }

    // DELETE by username  deleteItemByIdSQL
    module.exports.deleteItemByIdSQL = function (id) {
        console.log(" deleting adminuser username===" + id);
        let sql = `DELETE FROM  smptims.admin_users WHERE au_seq_no = ${id}`;
        console.log(" deleting sql=== " + sql);
        return sql;
    }

    // PUT  update by username -- this is for profile page
    module.exports.updatebyIDSQL = function (obj) {
        console.log(obj.phone_no);
        let sql = "update admin_users set password ='"          + obj.password         + "', " +
                                            "username ='"       + obj.username         + "', " + 
                                            "email ='"          + obj.email            + "', " +
                                            "phone_no ='"       + obj.phone_no         + "', " +  
                                            " rec_updt_dt= current_timestamp()"                                +"  , " +
                                            " rec_updt_user= user() "                                            
                                        " where au_seq_no = "   + obj.au_seq_no        + "";
        return sql;
    }
})();