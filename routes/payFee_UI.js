var express = require("express");
var router = express.Router();
var mysql = require("mysql");

/* GET */
router.get("/", function(req, res, next) {
  res.render("payFee_UI", { title: "Express" });
});

/* POST */
router.post("/", function(req, res) {
  const connection = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: "JH",
    password: "102938a",
    database: "parking_db",
    dateStrings: "date"
  });
  connection.connect();

  let insert_sql = `update cars set paymentTime=now() where carNumber="${req.body.title}"`;

  connection.query(insert_sql, function(err, rows, fields) {
    res.send("OK");
  });

  connection.end();
});
module.exports = router;
