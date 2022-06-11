const controller = require("./controller");

module.exports = app => app["get"]("/images", (req, res, next) => controller(req, res, next));