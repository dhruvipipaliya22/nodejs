const User = require("../models/user");

const usercontroller={
    get:async(req,res)=>{
        let users=await User.find();
        res.send(users);
    },
    post:async(req,res)=>{
        try{
            let user=await User.create(req.body);
            res.status(201).send(user);
        }catch(error){
            res.send("error",error);
        }
    },
};
module.exports=usercontroller;