import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { connectDB } from './src/config/db.js';
import { bookRouter } from './src/routes/book.routes.js';

const app = express()

dotenv.config({path:'./.env'});

// middleware
app.use(express.json());
app.use('/uploads' , express.static('uploads'))

app.use('/books' , bookRouter)
const port = process.env.PORT

connectDB();

app.listen(port , ()=>{
    console.log(`server running on port ${port}`);
})