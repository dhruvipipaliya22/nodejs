import mongoose from "mongoose";

const connectDB =async ()=>{
    try{
        const connectDB = await mongoose.connect(`${process.env.MONGODB_URL}`);
        console.log('MongoDB connected');
    }
    catch (err){
        console.log('MongoDB conenection ERROR',err);
        process.exit(1);
    }
}

export default connectDB