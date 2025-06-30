import dotenv from "dotenv"
import cors from "cors"
import connectDB from "./db/db.js";
import app from "./app.js";
import express from "express"

// const app = express()
dotenv.config({
    path:"./.env"
});

connectDB();

app.use(express.json());

app.listen(process.env.PORT,(err)=>{
    !err ? console.log(`server is started on port ${process.env.PORT}`):null
});