const express = require("express");
const app = express();
const homeRoutes = require("./Routes/home");
const aboutRoutes = require("./Routes/about");
const contentRoutes = require("./Routes/content");
const PORT = 8000;

app.set("view engine" , "ejs");


app.use("/" , homeRoutes);
app.use("/" , aboutRoutes);
app.use("/" , contentRoutes);


app.listen(PORT , () => {
    console.log("server started");
});
