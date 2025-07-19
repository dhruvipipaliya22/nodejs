import mongoose  from "mongoose";

const bookSchema = new mongoose.Schema({
  title:{
    type:String,
    required:[true  , "book title is required"],
    trim:true
  },
  author:{
    type:String,
    required:[true  , "book author is required"],
    trim:true
  },
  price:{
    type:Number,
    required:true,
    min:[0 , 'Price must be positive']
  },
  imagePath:{
    type:String
  },
  inStock:{
    type:Boolean,
    default:true
  }
} , {timestamps:true})


export const Book = mongoose.model("Book" , bookSchema)