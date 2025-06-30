const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');

dotenv.config({path:'./.env'});

const app=express();
const port= process.env.PORT

// middleware
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));
app.set('view engine' , 'ejs');

// router
app.get("/dashboard",(req,res)=>{
    res.render('dashboard')
});
app.get("/form",(req,res)=>{
    res.render('form')
});
app.post("/submit-form",(req,res)=>{
    const data= req.body
    res.render('table',{submittedData:data});
});
app.get("/table",(req,res)=>{
    res.render('table',{submittedData:null})
});
app.listen(port,(err)=>{
    !err ? console.log(`sever stared on port ${port}`):null;
});