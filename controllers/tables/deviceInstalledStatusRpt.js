'use strict';
(function () {
    module.exports.getItemByDatesSQL = function (fromdate, todate) {
        console.log(" From date=" + `${fromdate}` + " To date=" + `${todate}` );
		let sql = `SELECT * FROM  device_installed_dtls WHERE status = 'INSTALLED' and DATE(substr(installed_date_time,1,10)) between STR_TO_DATE('${fromdate}', '%Y-%m-%d') and  STR_TO_DATE('${todate}', '%Y-%m-%d')`;
		console.log(" Device Status query by status =" + sql);
		return sql;  
 	}	
 })();