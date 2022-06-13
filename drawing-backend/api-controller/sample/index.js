const controller = require("./controller");

module.exports = app => app["get"]("/sample", (req, res, next) => controller(req, res, next).catch(next));