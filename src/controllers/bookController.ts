import { Request, Response } from 'express';
import { books, Book } from '../models/book';
import { v4 as uuidv4 } from 'uuid';

export const getAllBooks = (req: Request, res: Response) => {
    res.status(200).json({
        status: 'success',
        data: {
            books,
        },
    });
}

export const getBookById = (req: Request, res: Response) => {
    const bookId = req.params.id;
    const book = books.find((b) => b.id === bookId);
    if (!book) {
        res.status(404).json({
            status: 'fail',
            message: 'Book not found',
        });
    }
    else {
        res.status(200).json({
            status: 'success',
            data: {
                book,
            },
        });
    }
}

export const createBook = (req: Request, res: Response) => {
    const { title, author, publishedYear } = req.body;

    if (!title || !author || !publishedYear) {
        res.status(400).json({
            status: 'fail',
            message: 'Please provide title, author, and published year',
        });
    }

    const newBook: Book = {
        id: uuidv4(),
        title,
        author,
        publishedYear,
    };

    books.push(newBook);
    res.status(201).json({
        status: 'success',
        data: {
            book: newBook,
        },
    });
}


export const updateBook = (req: Request, res: Response) => {
  const bookId = req.params.id;
  const bookIndex = books.findIndex((b) => b.id === bookId);

  if (bookIndex === -1) {
     res.status(404).json({
      status: 'fail',
      message: 'Book not found',
    });
  }

  const { title, author, publishedYear } = req.body;

  // Keep the existing book
  const existingBook = books[bookIndex];

  // Only update provided fields
  if (title !== undefined) existingBook.title = title;
  if (author !== undefined) existingBook.author = author;
  if (publishedYear !== undefined) existingBook.publishedYear = publishedYear;

  res.status(200).json({
    status: 'success',
    data: {
      book: existingBook,
    },
  });
};

export const deleteBook = (req: Request, res: Response) => {
    const bookId = req.params.id;
    const bookIndex = books.findIndex((b)=> b.id === bookId);
    const deletedBook = books[bookIndex];
    if (bookIndex === -1) {
        res.status(404).json({
            status: 'fail',
            message: 'Book not found',
        });
    } else {
        books.splice(bookIndex, 1);
        res.status(200).json({
            status: 'success',
            message: `${deletedBook.title} Book deleted successfully`,   
            books
        });
    }

}