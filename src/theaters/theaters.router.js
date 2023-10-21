const router = require("express").Router();
const controller = require("./theaters.controller");
const notAllowed = require("../methodNotAllowed");

router
    .route("/")
    .get(controller.list)
    .all(notAllowed)

module.exports = router;
