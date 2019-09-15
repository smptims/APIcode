'use strict';
(function () {
    const { createLogger, format, transports } = require('winston');
    const fs = require('fs');
    const path = require('path');
    require('winston-daily-rotate-file');
    const config=require('config');
    

    const logDir = 'log';

    // Create the log directory if it does not exist
    if (!fs.existsSync(logDir)) {
        fs.mkdirSync(logDir);
    }

    const filename = path.join(logDir, 'results.log');
    
    const logger = caller => {
        return createLogger({
            // change level if in dev environment versus production
            level:config.get('logLevel'),
            format: format.combine(
                format.label({ label: path.basename(caller) }),
                format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' })
            ),
            transports: [
                new transports.DailyRotateFile({
                    filename: `${logDir}/%DATE%-results.log`,
                    datePattern: 'YYYY-MM-DD',
                    prepend: true,
                    format: format.combine(
                        format.timestamp(),
                        format.json()
                    )
                }),
                new transports.Console({
                    format: format.combine(
                        format.colorize(),
                        format.printf(
                            info =>
                                `${info.timestamp} ${info.level} [${info.label}]: ${info.message}`
                        )
                    )
                })
            ]
        });

    };
    module.exports = logger;
})();