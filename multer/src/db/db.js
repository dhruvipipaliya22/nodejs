import mongoose from "mongoose";

const connectDB = async()=>{
    try{
        const connectionRes = await mongoose.connect(`${process.env.MONDODB_URL}`)
        console.log('MongoDB is connected');
    }catch(err){
        console.log('MongoDB connection Error',err );
        process.exit(1)
    }
}

export default connectDB