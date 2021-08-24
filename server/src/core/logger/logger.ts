import * as winston from 'winston';
import * as path from 'path';
const { combine, prettyPrint, timestamp, colorize } = winston.format;
const PROJECT_ROOT = `${path.join(__dirname, '..')}`;

class SetLogger {
  loggerConfig = {
    level: 'info',
    format: combine(timestamp(), prettyPrint(), colorize()),
    transports: [
      //
      // - Write all logs with level `error` and below to `error.log`
      // - Write all logs with level `info` and below to `combined.log`
      //
      new winston.transports.File({
        filename: `${PROJECT_ROOT}../../../log/error.log`,
        level: 'error',
      }),
      new winston.transports.File({ filename: `${PROJECT_ROOT}../../../log/combined.log` }),
    ],
  };

  logger: winston.Logger;
  constructor() {
    this.logger = winston.createLogger(this.loggerConfig);

    //
    // If we're not in production then log to the `console` with the format:
    // `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
    //
    if (process.env.NODE_ENV !== 'production') {
      this.logger.add(
        new winston.transports.Console({
          format: winston.format.simple(),
        })
      );
    }
  }
  get = () => {
    return this.logger;
  };
}

export const logger = new SetLogger().get();
