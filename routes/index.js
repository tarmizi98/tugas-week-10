const express = require("express");
const router = express.Router();
const usersRouter = require("./user.js")
const movieRouter = require("./movie.js")

router.use("/users", usersRouter);
router.use("/movies", movieRouter);

module.exports = router;