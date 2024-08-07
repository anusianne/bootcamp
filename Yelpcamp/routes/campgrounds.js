const express = require("express");
const router = express.Router();
const catchAsync = require("../utilities/catchAsync.js");
const Campground = require("../models/campground.js");
const campgrounds = require("../controllers/campgrounds.js");
const {
  isLoggedIn,
  isAuthor,
  validateCampground,
} = require("../middleware.js");
const multer = require("multer");
const { storage } = require("../Cloudinary");
const upload = multer({ storage });

router
  .route("/")
  .get(catchAsync(campgrounds.index))
  .post(upload.single("image"), (req, res) => {
    res.send(req.body, req.file);
  });
// .post(
//   isLoggedIn,
//   validateCampground,
//   catchAsync(campgrounds.createCampground)
// );

router.get("/new", isLoggedIn, campgrounds.renderNewForm);

router
  .route("/:id")
  .get(catchAsync(campgrounds.showCampground))
  .put(
    isLoggedIn,
    isAuthor,
    validateCampground,
    catchAsync(campgrounds.updateCampground)
  )
  .delete(isLoggedIn, isAuthor, catchAsync(campgrounds.deleteCampground));

router.get(
  "/:id/edit",
  isLoggedIn,
  isAuthor,
  catchAsync(campgrounds.renderEditForm)
);

module.exports = router;
