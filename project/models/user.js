const mongoose=require("mongoose");
const userschema=new mongoose.Schema({
    username:{type:String,require:true},
    email:{type:String,require:true,unique:true},
    number:{type:Number,require:true},
    role: { type: String, enum: ["USER", "ADMIN"], default: "USER" },
},
{
    timestamps:true,
});
const User=mongoose.model("User",userschema);
module.exports=userschema;