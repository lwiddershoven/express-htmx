const winston = require('winston');

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    defaultMeta: { service: 'user-service' },
    transports: [
      new winston.transports.Console(),
      //
      // - Write all logs with importance level of `error` or higher to `error.log`
      //   (i.e., error, fatal, but not other levels)
      //
      new winston.transports.File({ filename: 'error.log', level: 'error' }),
      //
      // - Write all logs with importance level of `info` or higher to `combined.log`
      //   (i.e., fatal, error, warn, and info, but not trace)
      //
      new winston.transports.File({ filename: 'combined.log' }),
    ],
  });

class Signup {
    constructor() {
        logger.info('Construtcing');
    }
    register_routes(app) {
        logger.info('Registering routes');
        app.get("/signup/", async (req, res) => {
            logger.info('Signup');
            return res.render("signup/overview");
        });
    }
}

module.exports = new Signup()