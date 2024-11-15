const express = require("express");
const connection = require("./config/db");
const UserModel = require("./model/DataByUser");
const PORT = 8000;
const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({extended:true}));


app.get("/", async (req, res) => {
    try{
 const userData = await UserModel.find({});
 res.render("form" , {userData});
    }
    catch(err){
        console.log(err);
        
    }
  
});


app.post("/indertData", async (req, res) => {
    try {
        await UserModel.create(req.body);
        console.log("data insert sucessfully");
    }
    catch (err) {
        console.log(err);
    }
    res.redirect("back")
    console.log(req.body);
})

app.get("/deleteData/:id" , async (req , res) => {
    console.log(req.params.id);
    
 await UserModel.findByIdAndDelete(req.params.id);
 console.log("data Delete Sucessfully");
 res.redirect("back")
})

app.get("/editData/:id" , async (req , res ) => {
    const storeData = await UserModel.findById(req.params.id);
    console.log(storeData);
    
    res.render("update" , {storeData})
})
 app.post("/updateData/:id" , async(req , res) => {
    console.log(req.params.id);
    console.log(req.body);
    try {
      await UserModel.findByIdAndUpdate(req.params.id, req.body);
      console.log("Data updated successfully");
      res.redirect("/");
    } catch (err) {
      console.log(err);
    }
 })


app.listen(PORT, () => {
    console.log(`Server started ${PORT}`);
    connection();
})