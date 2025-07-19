import { Book } from "../models/book.models.js";

// upload and add book
export const uploadBook = async (req, res) => {
    try {
        const newBook = new Book({
            title: req.body.title,
            // coverImage:`/uploads/${req.file.filename}`
        })
        await newBook.save()
        res.status(201).json({
            success: true,
            message: 'Book uploded successfully!',
            data: newBook
        })
    } catch (err) {
        res.status(500).json({ success: false, error: err.message })
    }
}

// get all books
export const getallBook = async (req, res) => {
    try {
        const books = await Book.find()
        res.status(201).json({
            success: true,
            books
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            error: err.message
        })
    }
}

// get a single book by id
export const getBookById = async (req, res) => {
    try {
        const book = await Book.findById(req.params.id)
        if (!book) {
            return res.status(404).json({
                success: false,
                message: 'Book Not Found!'
            })
        }
        res.json({
            success: true, data: book
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            error: err.message
        })
    }
}

// Update book (title or cover)
export const updateBook = async (req, res) => {
    try {
        const updateData = { title: req.body.title }
        if (req.file) {
            updateData.coverImage = `/uploads/${req.file.filename}`
        }
        const updatedBook = await Book.findByIdAndUpdate(req.params.id, updateBook, { new: true })
        if (!updatedBook) {
            res.status(404).json({
                success: false,
                message: 'Book not found'
            })
        }
        res.json({ success: true, message: 'book update', data: updatedBook })
    } catch (err) {
        res.status(500).json({
            success: false,
            error: err.message
        })
    }
}

// Delete Book
export const deleteBook = async (req, res) => {
    try {
        const deleteBook = await Book.findByIdAndDelete(req.params.id)
        if (!deleteBook) {
            return res.status(404).json({
                success: true,
                message: 'Book not found'
            })
        }
    }catch(err){
        res.status(500).json({
            success:false,
            error:err.message
        })
    }
}