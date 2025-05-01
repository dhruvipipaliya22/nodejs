const mongoose = require("mongoose");

const userschema = new mongoose.Schema(
    {
        username: { type: String, require: true },
        email: { type: String, require: true, unique: true },
        password:{type:String,require:true},
        number: { type: Number},
        role: { type: String, enum: ["USER", "ADMIN"], default: "USER" },
    },{
        timestamps: true,
    });
const User = mongoose.model("User", userschema);
module.exports = User;