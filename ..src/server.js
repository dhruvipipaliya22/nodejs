const express = require('express');

const Path =require('path');

const port = 4040;

const app = express();

app.set('view engine', 'ejs');
app.set('views', Path.join(__dirname,'./src/views'));

app.get('/',(req,res)=>{
    return res.render('index');
});

app.listen(port,(err)=>{
    !err ? console.log(`server is started on port ${port}`) : null;
});