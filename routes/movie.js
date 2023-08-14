const express = require("express");
const router = express.Router()
const MovieController = require("../controllers/moviesController.js");
const upload = require("../middlewares/uploadFile.js");

router.get("/", MovieController.findAll)
router.get("/:id", MovieController.findOne)

//insert
router.post("/", upload.single("image"), MovieController.create)

//update movie
router.put("/:id", upload.single("image"), MovieController.update)
    
//delete product
router.delete("/:id", MovieController.delete)

module.exports = router;