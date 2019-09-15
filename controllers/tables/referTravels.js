'use strict';
(function () {
    module.exports.getItemByIDSQL = function (id) {
        console.log(" Deleted Sequence no=" + `${id}`);
        let sql = `SELECT * FROM  refer_travels WHERE rt_seq_no= '${id}' `;
        console.log("sql query to select by itemid=" + sql);
        return sql;
    }

    // GET ALL	
    module.exports.getallSQL = function () {
        let sql = `SELECT * FROM  refer_travels`;
        return sql;
    }

    // POST
    module.exports.insertitemSQL = function (obj) {
        console.log("Inserting new refer travels" );
        let sql = `insert into smptims.refer_travels( customer_no, travels_name, email, phone_no, location, rec_create_dt, rec_create_user) \
                   values(${obj.customer_no}, '${obj.travels_name}', '${obj.email}', '${obj.phone_no}', ${obj.location},current_timestamp,user())`;
        return sql;
    }

    // DELETE by refer travels record  deleteItemByIdSQL
    module.exports.deleteItemByIdSQL = function (id) {
        console.log(" deleting refer_travels for the id ===" + id);
        let sql = `DELETE FROM  smptims.refer_travels WHERE rt_seq_no = ${id}`;
        console.log(" deleting sql=== " + sql);
        return sql;
    }

    // PUT  updating refer travels record -- this is for profile page
    module.exports.updatebyIDSQL = function (obj) {
        console.log(obj.phone_no);
        let sql = "update refer_travels set travels_name ='" + obj.travels_name + "'," +
											"email ='" + obj.email + "'," +
											"phone_no =" + obj.phone_no + ",  " + 
											"customer_no =" + obj.customer_no + ",  " + 
											"location ='" + obj.location + "'," +
											"rec_updt_dt = current_timestamp(), rec_updt_user = user() " +  											
				  "where rt_seq_no = " + obj.rt_seq_no + "";
        return sql;
    }
})();