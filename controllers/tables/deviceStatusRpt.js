'use strict';
(function () {

    module.exports.getItemByIDSQL = function (id) {
        console.log("obj.name=" + `${id}`);
		if (`${id}` === 'ALL') {
		    let sql = `SELECT * FROM  device_installed_dtls `;
			console.log(" All Device details query =" + sql);
			return sql;
		}
		else { 
		    let sql = `SELECT * FROM  device_installed_dtls WHERE status = '${id}' `;
			console.log(" Device Status query by status =" + sql);
			return sql;  
		}
    }	
 })();