const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const checkRouter = require("./routes/check");
const indexRouter = require("./routes/index");
const parkingRouter = require("./routes/parking");
const getCarsRouter = require("./routes/getCars");
const enterCarRouter = require("./routes/enterCar");
const exitCarsRouter = require("./routes/exitCar");
const payFeeRouter = require("./routes/payFee");
const searchRouter = require("./routes/search");
const enterCar_UIRouter = require("./routes/enterCar_UI");
const exitCar_UIRouter = require("./routes/exitCar_UI");
const payFee_UIRouter = require("./routes/payFee_UI");
const index_ReactRouter = require("./routes/index_React");

const app = express();
// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/check", checkRouter);
app.use("/index", indexRouter);
app.use("/parking", parkingRouter);
app.use("/getCars", getCarsRouter);
app.use("/enterCar", enterCarRouter);
app.use("/exitCar", exitCarsRouter);
app.use("/payFee", payFeeRouter);
app.use("/search", searchRouter);
app.use("/enterCar_UI", enterCar_UIRouter);
app.use("/exitCar_UI", exitCar_UIRouter);
app.use("/payFee_UI", payFee_UIRouter);
app.use("/index_React", index_ReactRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});
// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
