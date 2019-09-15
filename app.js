(function () {
    // declarations 
    const express = require('express');
    const bodyParser = require('body-parser');
    const config = require('config');
    const port = config.get('port')
    const app = express();
    const cors = require('cors');
    app.use(cors({ origin: '*' }))

    //include controller
    const adminUsersController = require('./controllers/adminUsersController');
    const serviceCenterUsersController = require('./controllers/serviceCenterUsersController');
    const productTechDtlsController = require('./controllers/productTechDtlsController');
    const productOrderDtlsController = require('./controllers/productOrderDtlsController');
    const productOrderSmryController = require('./controllers/productOrderSmryController');

//    const commonMailcontroller = require('./controllers/commonMailcontroller');
    const adminMailController = require('./controllers/adminMailController');
    const adminNotifyController = require('./controllers/adminNotifyController');
    const adminSmsController = require('./controllers/adminSmsController');
    const customerUsersController = require('./controllers/customerUsersController');
    const deviceInstalledDtlsController = require('./controllers/deviceInstalledDtlsController');

    const deviceInstalledDailyRptControllers = require('./controllers/deviceInstalledDailyRptControllers');
    const deviceInstalledHistRptController = require('./controllers/deviceInstalledHistRptController');


    //tracing and logging
    const tracer = require('./controllers/common/requesttrace');

    const ktclogger = new (require('./controllers/common/ktclogger'))(__filename);
    //log level test 
    ktclogger.logdebug(`debug level working for ${config.get('environment.name')} ENV.`);
    ktclogger.logerror(`error level log working for ${config.get('environment.name')} ENV.`)
    ktclogger.logverbose(`verbose level log working for ${config.get('environment.name')} ENV.`)
    ktclogger.logwarn(`warning level log working for ${config.get('environment.name')} ENV.`)
    ktclogger.loginfo(`info level log working for ${config.get('environment.name')} ENV.`)
    
    app.use(bodyParser.urlencoded({ extended: false }));

    app.use(bodyParser.json());
    app.use(tracer.userTracer);

    //exposing all controllers 
    adminUsersController(express, app);
    serviceCenterUsersController(express, app);
    productTechDtlsController(express, app);
    productOrderDtlsController(express, app);
    productOrderSmryController(express, app);

 //   commonMailcontroller(express, app);
    adminMailController(express, app);
    adminNotifyController(express, app);
    adminSmsController(express, app);
    customerUsersController(express, app);
    deviceInstalledDtlsController(express, app);
    deviceInstalledDailyRptControllers(express, app);
    deviceInstalledHistRptController(express, app);

    //express middleware to handle application error 
    app.use(tracer.golbleError);
    app.listen(port);

    ktclogger.loginfo(`common app listening you port  no  ${port}`);
})();

