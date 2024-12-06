const express = require("express");
const multer = require("multer");
const path = require("path");
const dashBoardRoutes = require("./Router/dashBoard");
const connection = require("./config/db")
const app = express();
const PORT = 100;

app.set("view engine" , "ejs");
app.use("/assets" , express.static( path.join(__dirname , "/assets")));

app.use("/" , dashBoardRoutes);

app.listen(PORT , () => {
    console.log("sever started");
    connection();
});