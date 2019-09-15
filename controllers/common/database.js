'use strict';
(function () {
    const mysql = require("mysql");
    const pool = mysql.createPool({
        connectionLimit: 10,
        host: 'LENOVO-PC',
        user: 'root',
        password: 'user123#1',
        database: 'testdb',
        debug: false
    });

    function executeQuery(sql, callback) {
        pool.getConnection((err, connection) => {
            if (err) {
                return callback(err, null);
            } else {
                if (connection) {
                    connection.query(sql, function (error, results, fields) {
                        connection.release();
                        if (error) {
                            return callback(error, null);
                        }
                        return callback(null, results);
                    });
                }
            }
        });
    }

    function query(sql, callback) {
        console.log(sql);
        executeQuery(sql, function (err, data) {
            if (err) {
                return callback(err);
            }
            callback(null, data);
        });
    }

    module.exports = {
        query: query
    }
})();