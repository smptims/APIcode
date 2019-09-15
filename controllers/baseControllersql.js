'use strict';
(function () {
    var bodyParser = require('body-parser');
    var urlencodedParser = bodyParser.urlencoded({ extended: false });
    module.exports = function (app, sql, table, name, Logger) {

        // ADMIN_USERS table fetch details GET by username
        app.get('/' + name + '/:itemID', function (req, res, next) {
            //get data from mongosql and pass it to view
            console.log("itemID..." + req.params.itemID);
            console.log(table.getItemByIDSQL(req.params.itemID));
            sql.query(table.getItemByIDSQL(req.params.itemID), (err, data) => {
                if (err) {
                    console.log("\n:::::::::::::::::::::::::::error:::::::::::::::::::::::::::\n ", err);
                    res.json({
                        "Success": false,
                        "ErrorMessage": "Error 400: Internal system error"
                    });
                    next();
                }
                else {
                    console.log('tasks : ', data);
                    // message:"Products listed.",
                    res.status(200);
                    res.json(data);
                }
            });
        });  //end of fetch by itemID

        // ADMIN_USERS fetch all the details   GET all
        app.get("/" + name, (req, res, next) => {

            console.log(table.getallSQL());
            sql.query(table.getallSQL(), function (err, data) {

                if (err) {
                    console.log("error: ", err);
                    res.json({
                        "Success": false,
                        "ErrorMessage": "Error 400: Internal system error"
                    });
                    next();
                }
                else {
                    console.log('tasks : ', data);
                    // message:"Products listed.",
                    res.status(200);
                    res.json({ data })
                }
            });
        });  // end of fetch all

        // ADMIN_USERS table user accounts     POST 
        app.post('/' + name, urlencodedParser, function (req, res, next) {

            console.log(table.insertitemSQL(req.body));
            sql.query(table.insertitemSQL(req.body), (err, data) => {
                if (err) {
                    console.log("error: ", err);
                    next();
                }
                else {
                    console.log('tasks : ', data);
                    // message:"Products listed.",
                    res.status(201);
                    res.json({ "Success": true })
                }
            });
        });  //end of post method



        // ADMIN_USERS delete data     DELETE by username  
        app.delete('/' + name + '/:itemID', function (req, res, next) {
            //get data from mongosql and pass it to view
            console.log(req.params.itemID);
            //Logger.logInfo("delete method called");
            
            sql.query(table.deleteItemByIdSQL(req.params.itemID), (err, data) => {
                if (err) {
                    console.log("error: ", err);
                    next();
                }
                else { 
                    res.status(200);
                    res.json({
                        "Success": true,
                        "Message": " Deleted successfully details"
                    })
                }
            });
        }); // end of delete

        // ADMIN_USERS table user accounts     PUT by username 
        app.put('/' + name, urlencodedParser, function (req, res, next) {

            console.log(table.updatebyIDSQL(req.body));
            sql.query(table.updatebyIDSQL(req.body), (err, data) => {
                if (err) {
                    console.log("error: ", err);
                    next();
                }
                else {
                    
                    res.status(200);
                    res.json({
                        "Success": true,
                        "Message": "updated details"
                    })
                }
            });
        });  //end of PUT method


        
    };
})();