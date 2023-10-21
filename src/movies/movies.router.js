const router = require("express").Router();
const controller = require("./movies.controller");
const notAllowed = require("../methodNotAllowed");

router
  .route("/")
  .get(controller.list)
  .all(notAllowed)

router
  .route("/:movieId")
  .get(controller.read)
  .all(notAllowed)

router
  .route("/:movieId/theaters")
  .get(controller.getMovieTheaters)
  .all(notAllowed)

router
  .route("/:movieId/reviews")
  .get(controller.getReviews)
  .all(notAllowed)

module.exports = router;
