const express = require("express");
const app = express();
const PORT = 3000;
const path = require("path");
app.set("view engine" , "ejs");
app.use("/assets" , express.static(path.join(__dirname , "/assets")))

app.get("/" , (req , res) => {
res.render("dashBoard");
});

app.listen(PORT , () => {
console.log("server Started");
})