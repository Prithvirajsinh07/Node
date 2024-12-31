const express = require("express");
const dashBoardRotes = require("./routes/dashBoard");
const PORT = 4000;
const app = express();
const dotenv = require("dotenv");
const connection = require("./config/db");

dotenv.config();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));

app.use("/", dashBoardRotes);

app.listen(process.env.PORT, () => {
  console.log("serever started");
  connection();
})