var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function(req, res, next) {
  res.render("search", { title: "Express" });
});

router.post("/", function(req, res) {
  var mysql = require("mysql");
  const connection = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: "JH",
    password: "102938a",
    database: "parking_db",
    dateStrings: "date"
  });
  connection.connect();

  connection.query(
    `select * from cars where carNumber like '%${req.body.title}%';`,
    function(err, rows, fields) {
      res.send(rows);
    }
  );
  connection.end();
});

module.exports = router;
