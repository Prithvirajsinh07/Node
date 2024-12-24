const express = require("express");
const dashBoardRotes = require("./Router/dashBoard");
const PORT = 2000;
const app = express();
const path = require("path");
const connection = require("./config/db");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const passport = require("passport");
const passportLocal = require("./config/passport-local");



app.set("view engine", "ejs");
app.use("/assets", express.static(path.join(__dirname, "assets")));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
  secret: 'nodeAdmine',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 1000 * 60 * 60 },
}));
app.use(passport.initialize());
app.use(passport.session());
app.use("/", dashBoardRotes);

app.listen(PORT, () => {
  console.log("serever started");
  connection();
})