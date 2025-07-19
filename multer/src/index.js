import dotenv from "dotenv"
import cors from "cors"
import connectDB from "./db/db.js";
import app from "./app.js";
import express from "express"
import router from "./router/book.router.js";

// const app = express()
dotenv.config({
    path:"./.env"
});

connectDB();

app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use('/books', router);

// basic router
app.get("/" , (req,res)=>{
    res.send("Book Api" , router)
})
app.listen(process.env.PORT,(err)=>{
    !err ? console.log(`server is started on port ${process.env.PORT}`):null
});