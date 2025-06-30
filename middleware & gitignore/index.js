const express = require('express');

const dotenv = require('dotenv');

dotenv.config({
    path:"./.env",
});

const middleware = (req,res,next)=>{
    let isAuthenticate = false;

    let access =req.query.age;

    console.log(access);
    
    if(isAuthenticate){
        res.send('user is authenticated!!');
        next();
    }
    res.redirect('/');
};

const app = express();

const port = process.env.PORT;

app.set('view engine','ejs');

app.get('/',(req,res)=>{
    return res.render('index')
});

app.get('/home',(req,res)=>{
    return res.render('home');
});

app.get('/cart',middleware,(req,res)=>{
    return res.render('cart');
});

app.get('/profile',middleware,(req,res)=>{
    return res.render('profile');
});

app.listen(port,(err)=>{
    !err ? console.log(`server started on port ${port}`) : null;
});