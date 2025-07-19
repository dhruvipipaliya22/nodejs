import express from 'express'
import { createBook , getBook , updateBook , deleteBook } from '../controller/book.controller.js'
import { upload } from '../utils/multer.js'

const router = express.Router()

router.route('/')
.post(upload.single('image') , createBook)
.get(getBook)

router.route('/:id')
.put(upload.single('image') , updateBook)
.delete(deleteBook)

export default router