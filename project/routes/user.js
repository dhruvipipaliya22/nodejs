const {Router}=require("express");
// const User=require("../models/user")
const usercontroller = require("../controller/user");
const router=Router();
router.get("/",usercontroller.get);
router.post("/",usercontroller.post);
module.exports=router;