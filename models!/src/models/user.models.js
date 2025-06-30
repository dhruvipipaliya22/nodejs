import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            unique: true,
            require: true
        },
        email: String,
    }, { timestamps: true }
)

export default User = mongoose.model('User', userSchema)