const router = require("express").Router();
const controller = require("./reviews.controller");
const notAllowed = require("../methodNotAllowed");

router
  .route("/:reviewId")
  .put(controller.update)
  .delete(controller.destroy)
  .all(notAllowed)

module.exports = router;