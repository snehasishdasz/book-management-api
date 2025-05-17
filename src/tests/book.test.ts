// tests/book.test.ts

import request from 'supertest';
import app from '../app';

describe('POST /api/books', () => {
  it('should create a new book', async () => {
    const newBook = {
      title: 'Atomic Habits',
      author: 'James Clear',
      publishedYear: 2018,
    };

    const response = await request(app)
      .post('/api/books')
      .send(newBook)
      .expect(201);

    expect(response.body).toHaveProperty('status', 'success');
    expect(response.body.data.book).toHaveProperty('id');
    expect(response.body.data.book.title).toBe('Atomic Habits');
  });

  it('should return 400 for missing fields', async () => {
    const badBook = {
      title: 'Incomplete Book',
    };

    const response = await request(app)
      .post('/api/books')
      .send(badBook)
      .expect(400);

    expect(response.body).toHaveProperty('message', 'Please provide title, author, and published year');
  });
});
