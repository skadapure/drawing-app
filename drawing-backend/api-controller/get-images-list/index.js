const controller = require("./controller");

module.exports = app => app["get"]("/images/keys", (req, res, next) => controller(req, res, next));