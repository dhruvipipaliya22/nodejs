const express=require("express");
const dbconnect = require("./config/db");
const app=express();
app.use(express.json());
console.log(process.env.PORT);
const PORT=process.env.PORT||8090;
app.listen(8090,()=>{
    console.log("server is starting" ,PORT);
    dbconnect();
})