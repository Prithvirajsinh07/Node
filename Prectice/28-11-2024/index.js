const express = require("express");
const dashBoardRotes = require("./Router/dashBoard");
const PORT = 2000;
const app = express();
const path = require("path");

app.set("view engine" , "ejs");
// app.use("/assets" , express.static("/assets"));
app.use("/assets", express.static(path.join(__dirname, "assets")));

app.use("/", dashBoardRotes);

app.listen(PORT , () => {
    console.log("serever started");
})