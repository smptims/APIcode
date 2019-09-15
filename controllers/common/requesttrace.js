(function () {
    const ktclogger = new (require('./ktclogger'))(__filename);
    module.exports.userTracer = function (req, res, next) {
        ktclogger.loginfo('Request trace Time:' + new Date("2015-03-25T12:00:00-06:30").toString());
        next()
    };
    module.exports.golbleError = function (err, req, res, next) {
        ktclogger.loginfo('Error trace time:' + new Date("2015-03-25T12:00:00-06:30").toString());
        if (err.errerType === 500) {
            res.status(err.errerType);
            res.json({ message: err.localError,statusCode: err.errerType,httpMessage: "Internal Server error"});
        }
        if (err.errerType === 404) {
            res.status(err.errerType);
            res.json({ message: err.localError,statusCode: err.errerType,httpMessage: "Not found"});
        }
        if (err.errerType === 400) {
            res.status(err.errerType);
            res.json({ message: err.localError,statusCode: err.errerType,httpMessage: "Bad Request : check the request"});
        }
        next();
    };

    module.exports.localLog = (function (req, res, next) {
        ktclogger.loginfo('Request URL:' + req.originalUrl);
        ktclogger.loginfo('Request Type:' + req.method);
        ktclogger.loginfo('Request Body:' + JSON.stringify(req.body));
        res.on('finish', () => {
            ktclogger.loginfo(`${res.statusCode} ${res.statusMessage}; ${res.get('Content-Length') || 0}b sent`)
            ktclogger.loginfo('Response Status:' + JSON.stringify(res.statusMessage));
            ktclogger.loginfo('Response statusCode:' + JSON.stringify(res.statusCode));
            ktclogger.loginfo('Response trace Time:' + new Date("2015-03-25T12:00:00-06:30").toString());
        })
        next();
    });
})();