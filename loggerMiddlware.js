const logger = require('./logger/winston')


const loggerMiddleware = (req, res, next) => {
    logger.info(req.ip)

    next()
}

module.exports = loggerMiddleware;