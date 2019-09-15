(function () {
    var ktcloggerbase = require('./ktcloggerbase');
    function loggers(filename){        
        this.loginfo = function (logstring) {
            ktcloggerInstance=ktcloggerbase(filename);
            ktcloggerInstance.info(logstring);
        }
        this.logverbose = function (logstring) {
            ktcloggerInstance=ktcloggerbase(filename);
            ktcloggerInstance.verbose(logstring);
        }
        this.logdebug = function (logstring) {
            ktcloggerInstance=ktcloggerbase(filename);
            ktcloggerInstance.info(logstring);
        }
        this.logwarn = function (logstring) {
            ktcloggerInstance=ktcloggerbase(filename);
            ktcloggerInstance.warn(logstring);
        }
        this.logerror = function (logstring) {
            ktcloggerInstance=ktcloggerbase(filename);
            ktcloggerInstance.error(logstring);
        }
        return this;
    };
    module.exports =loggers;
})();