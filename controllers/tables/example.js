'use strict';
(function () { 
 
    module.exports.insertitemSQL=function(id,name) {
        let sql = `INSERT INTO  example(id, name) \
                   VALUES('${id}',${name})`;
        return sql;           
    }
 
    module.exports.getitemByIdSQL= function(id) {
        let sql = `SELECT * FROM  example WHERE ID = ${id}`;
        return sql;           
    }
 
    module.exports.deleteProductByIdSQL= function(id) {
        let sql = `DELETE FROM  example WHERE ID = ${id}`;
        return sql;           
    }
 
    module.exports.getallSQL= function() {
        let sql = `SELECT * FROM  example`;
        return sql;           
    }    
})();