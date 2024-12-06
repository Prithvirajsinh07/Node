const passport = require("passport");
const PassportStretrgy = require("passport-local").Strategy;
const UserModel = require("../model/UserDataBase");

passport.use(new PassportStretrgy({ usernameField: "userName" }, async (userName, password, done) => {
    console.log(userName ,password);
    const getUserData = await UserModel.findOne({ userName: userName });
    if (getUserData) {
        if (getUserData.password === password) {
           return done(null, getUserData);
        } else {
           return done(null, false);
        }
    } else {
       return done(null, false);
    }
}));

passport.serializeUser(async (user , done)=> {
    const userData = await UserModel.findById(user.id);
    if(userData){
       return done(null , userData);
    }else{
        done(null , false);
    }
})
passport.deserializeUser(async (user , done)=> {
    const userData = await UserModel.findById(user.id);
    if(userData){
       return done(null , userData);
    }else{
       return done(null , false);
    }
});

module.exports = passport;