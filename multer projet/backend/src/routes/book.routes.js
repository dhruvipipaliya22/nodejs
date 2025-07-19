import express from 'express'
import multer from 'multer'
import path from 'path'
import { deleteBook, getallBook, getBookById, updateBook, uploadBook } from '../controller/book.controller.js';

const router =express.Router();

// Multer setup
const storage = multer.diskStorage({
    destination:(req,file,cd)=>cd(null , 'upload'),
    filename:(req,file,cd)=> cd(null,file.filename + '_' + path.extname(file.originalname))
})

const upload = multer({storage})

// Router
router.post('/upload', uploadBook)
router.get('/',getallBook)
router.get('/:id',getBookById)
router.put('/:id', upload.single('cover'),updateBook)
router.delete('/:id' , deleteBook)

export const bookRouter =router;