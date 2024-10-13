// import express
const express = require ("express");
// initialise app with express
const app = express();
const Router = express.Router();



// get, put, post, delete
Router.get("/Getname", (req,res)=>{
    res.status(200).json({Name:"Chandrashekhar"});
});
app.use(Router);


// start the server

app.listen(4000, ()=>{
    console.log("server is running on port 4000");
});