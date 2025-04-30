const express=require("express");
const dbconnect = require("./config/db");
require("dotenv").config();
const cors=require("cors");
const router = require("./routes/user");
const app=express();
app.use(express.json());
app.use(cors());
// user router
app.use("/api/users",router)
console.log(process.env.PORT);
const PORT=process.env.PORT||8090;

app.listen(PORT,()=>{
    console.log(`server is listening on port ${PORT}`);
    dbconnect();
})