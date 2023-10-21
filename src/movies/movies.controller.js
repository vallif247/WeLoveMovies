const moviesService = require("./movies.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary")

const movieExists = async (req, res, next) => {
  const movie = await moviesService.read(req.params.movieId)
  if (movie) {
    res.locals.movie = movie
    return next()
  }
  next({status: 404, message:"Movie cannot be found."})
}

const list = async (req, res, next) => {
  if (req.query) {
    req.query.is_showing === "true" &&
      res.json({ data: await moviesService.currentlyShowing() });
  }
  res.json({ data: await moviesService.list() })
}

const read = async (req, res, next) => {
  const movie = res.locals.movie
  res.json({ data: movie })
}

const getMovieTheaters = async (req, res, next) => {
  const movie = res.locals.movie.movie_id
  const theaters = await moviesService.getMovieTheaters(movie)
  res.json({ data: theaters })
}

const getReviews = async (req, res, next) => {
  const movie = req.params.movieId
  const reviews = await moviesService.getReviews(movie)
  res.json({ data: reviews })
}

module.exports = {
  list: asyncErrorBoundary(list),
  read: [asyncErrorBoundary(movieExists), read],
  getMovieTheaters: [asyncErrorBoundary(movieExists), getMovieTheaters],
  getReviews: [asyncErrorBoundary(movieExists), getReviews]
}