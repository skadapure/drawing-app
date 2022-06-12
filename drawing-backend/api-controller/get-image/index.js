const controller = require("./controller");

module.exports = app => app["get"]("/images/:userId", (req, res, next) => controller(req, res, next));