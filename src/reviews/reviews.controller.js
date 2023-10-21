const reviewsService = require("./reviews.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary")

const reviewExists = async (req, res, next) => {
    const review = await reviewsService.read(req.params.reviewId)

  if (review) {
    res.locals.review = review
    return next()
  }
  next({ status: 404, message: "Review cannot be found." })
}

const destroy = async (req, res) => {
    const { review } = res.locals
    await reviewsService.destroy(review.review_id)
    res.status(204).json("204 No Content")
}

const update = async (req, res) => {
  const data = req.body.data
  data.review_id = res.locals.review.review_id
  await reviewsService.update(data)
  const updated = await reviewsService.read(data.review_id)
  const newReview = res.locals.review
  updated.critic = await reviewsService.getCriticById(newReview.critic_id);
    res.json({ data: updated });
}

module.exports = {
destroy: [asyncErrorBoundary(reviewExists), destroy],
update: [asyncErrorBoundary(reviewExists), asyncErrorBoundary(update)], 
}
