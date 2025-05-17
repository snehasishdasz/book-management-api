import express from 'express';
import { getAllBooks,getBookById, createBook, updateBook, deleteBook, importBooks } from '../controllers/bookController';
import upload from '../middlewares/upload';

const router = express.Router();


router.get('/books', getAllBooks);
router.get('/books/:id', getBookById );
router.post('/books', createBook);
router.put('/books/:id', updateBook);
router.delete('/books/:id', deleteBook);
router.post('/books/import', upload.single('file'), importBooks);

export default router;
