import { Book } from "../models/book.models.js";

// book create with controller

// POST

// create book

export const createBook = async(req , res) => {
  try{


    if(!req.file){
      return res.status(400).json({
        success:false,
        error:'No Image Uploded!!!'
      })
    }

    // create a new book with image path

    const book = await Book.create({
      ...res.body,
      imagePath:req.file.path
    })


    // const book = await Book.create(req.body);
    // res.status(201).json({
    //   success:true,
    //   data:book
    // })


  }catch(err){
    res.status(400).json({
      success:false,
      error:err.message
    })
  }
}

// getbook 

// GET

export const getBook = async(req , res) => {
  try{
    const books = await Book.find();
    res.status(200).json({
      success:true,
      count:books.length,
      data:books
    })
  }catch(err){
    res.status(500).json({
      success:false,
      error:"Server Error"
    })
  }
}

// update book

// PUT

export const updateBook = async(req , res) => {
  try{
    const book = await Book.findByIdAndUpdate(req.params.id , req.body , {
      new:true,
      runValidators:true
    });

    if(!book){
      return res.status(404).json({
        success:false,
        error:"Book Not Found"
      })
    }

    res.status(200).json({
      success:true,
      data:book
    });

  }catch(err){
    res.status(400).json({
      success:false,
      error:err.message
    })
  }
}

// Delete Book


// Delete

export const deleteBook  = async(req , res) => {
  try{
    const book = await Book.findByIdAndDelete(req.params.id);

    if(!book){
      return res.status(404).json({
        success:false,
        error:'Book not found'
      })
    }

    res.status(200).json({
      success:true,
      data:{}
    })
  }catch(err){
    res.status(500).json({
      success:false,
      error:"Server Error"
    })
  }
}