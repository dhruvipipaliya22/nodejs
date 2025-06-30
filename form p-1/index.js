const express= require('express');

let port = 9000;

const app = express();

app.set('view engine' , 'ejs');

app.use(express.urlencoded());

app.get('/',(req,res)=>{
    return res.render('home');
});
let studentData=[];

app.get('/form',(req,res)=>{
    return res.render('form',{
        student:studentData
    });
});

app.post('/insertdata',(req,res)=>{
    let id= req.body.id;
    let name=req.body.name;
    let email=req.body.email;
    let password=req.body.password;

    let obj={
        id:id,
        name:name,
        email:email,
        password:password
    }
    studentData.push(obj);

    console.log('studatndata successfully added !!');
    
    return res.redirect('/form');
});

app.listen(port,(err)=>{
    !err ? console.log(`server is started on port ${port}`) : null;
});