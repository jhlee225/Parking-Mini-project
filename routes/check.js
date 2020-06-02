var express = require("express");
var router = express.Router();

router.post("/", function (req, res) {
  var mysql = require("mysql");
  const connection = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: "JH",
    password: "102938a",
    database: "parking_db",
  });
  connection.connect();
  let insert_sql = `select * from cars where carNumber="${req.body.title}";`;
  connection.query(insert_sql, function (err, rows, fields) {
    if (err) {
      console.log(err);
      res.send(err);
    } else {
      res.send(rows);
    }
  });
  connection.end();
});
module.exports = router;
