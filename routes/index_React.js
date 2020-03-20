var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index_React", { title: "Express" });
});

module.exports = router;
