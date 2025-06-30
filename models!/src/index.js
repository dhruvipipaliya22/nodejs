import dotenv from 'dotenv'
import app from './app.js'
import connectDB from './db/db.js';

dotenv.config({
    path:'./.env'
});

connectDB();

app.listen(process.env.PORT,(err)=>{
    !err ? console.log(`server started on port ${process.env.PORT}`):null;
});