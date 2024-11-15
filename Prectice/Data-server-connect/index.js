const express = require("express");
// const connection = require("./mongoose/database");
const PORT = 8000;
const app = express();
// app.use(express.urlencoded());


app.set("view engine" , "ejs");
app.get('/', (req, res) => {
    // res.send("hiii")
    res.render("addData");
})


    // app.post("/insertAddData" , async (req , res) => {
    //       console.log(req.body);
    // } )


app.listen(PORT , (error) => {
    if (error) {
        console.log("server is not running");
        return;
      }
    //   connection();
    console.log(`server has started ${PORT}` );

})