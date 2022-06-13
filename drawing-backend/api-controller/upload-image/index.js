const controller = require("./controller");

module.exports = app => app["post"]("/images/upload", (req, res, next) => controller(req, res, next).catch(next));