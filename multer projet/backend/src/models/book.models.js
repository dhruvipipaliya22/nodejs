import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    title:{type:String , required:true},
    coverImage:{type:String}
},{timestamps:true})

export const Book = mongoose.model('Book',bookSchema)