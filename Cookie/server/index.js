const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const app=express()

app.use(cookieParser());
app.use(express.json());

app.use(cors({
    origin:"http://localhost:5173/",
    credentials:true
}));

app.get("/",(req,res)=>{
    res.end("Hello Express!!")
});