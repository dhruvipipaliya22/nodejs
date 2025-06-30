import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const connectDB = await mongoose.connect(`${process.env.MONGODB_URI}`);
        console.log('MongoDB Connected');
    } catch (err) {
        console.log('MongoDB connection ERROR', err);
        process.exit(1);
    }
}

export default connectDB