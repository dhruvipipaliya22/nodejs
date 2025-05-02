
// local,inbuilt,third party module
const express=require("express");
const sum = require("./test");
const app=express()
app.get("/test",(req,res)=>{
    res.send("hello , i'm node js.api..");
})
// listen..
app.listen(8090,()=>{
    console.log("server is listening on port 8090");
    sum(10,20);
});