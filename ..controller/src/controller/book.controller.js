import { Book } from "../models/book.models";

// book create with controller

const creatBook = async(req,res)=>{
    const book = await Book.create(res.body);
    res.status(201)
}