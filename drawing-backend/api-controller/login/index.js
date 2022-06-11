const controller = require("./controller");

module.exports = app => app["post"]("/login", (req, res, next) => controller(req, res, next));