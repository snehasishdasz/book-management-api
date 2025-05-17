# 📚 Book Management REST API

A simple Book Management API built with **Node.js**, **Express**, and **TypeScript**. This RESTful API allows users to perform basic CRUD operations on a collection of books, and also supports bulk CSV import with manual validation.

---

## 🚀 Features

* ✅ Get all books
* ✅ Get a single book by ID
* ✅ Add a new book
* ✅ Update a book by ID
* ✅ Delete a book by ID
* ✅ Bulk import books via CSV (manual validation, no external parser)
* ✅ Centralized error handling middleware
* ✅ Basic logging with Morgan
* ✅ Type safety using TypeScript
* ✅ Jest test for book creation endpoint
* ✅ Environment variable support

---

## 📦 Tech Stack

* Node.js
* Express.js
* TypeScript
* Jest (for testing)
* Morgan (logging)
* Multer (file upload)

---

## 📁 Project Structure

```
├── src
│   ├── controllers
│   ├── routes
│   ├── services
│   ├── middlewares
│   ├── data
│   ├── utils
│   ├── tests
│   └── app.ts
├── dist
├── .env
├── tsconfig.json
├── jest.config.js
├── package.json
└── README.md
```

---

## 📚 API Endpoints

### Base URL: `http://localhost:5000/api`

| Method | Endpoint        | Description               |
| ------ | --------------- | ------------------------- |
| GET    | `/books`        | Get all books             |
| GET    | `/books/:id`    | Get a single book by ID   |
| POST   | `/books`        | Add a new book            |
| PUT    | `/books/:id`    | Update a book by ID       |
| DELETE | `/books/:id`    | Delete a book by ID       |
| POST   | `/books/import` | Bulk import books via CSV |

---

## 🧪 Testing

```bash
npm test
```

* Located in `src/tests/book.test.ts`
* Jest is used for unit testing
* Includes tests for `POST /api/books`

---

## 🔧 Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/book-management-api.git
cd book-management-api
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Create `.env` File

Create a `.env` file in the root and add:

```env
PORT=5000
```

### 4. Run the Project

```bash
npm run dev
```

### 5. Build for Production

```bash
npm run build
```

---

## 📥 CSV Import Format

CSV columns should be:

```
title,author,publishedYear
```

Example:

```
Atomic Habits,James Clear,2018
Clean Code,Robert C. Martin,2008
```

Use Postman to upload with `form-data`:

* Key: `file`
* Type: `File`
* Value: Select your CSV file

---

## 📫 Postman Collection

A Postman collection is available to test all endpoints:

**[📩 Download Collection](https://www.postman.com/collections/your-link-here)**

---

## ✅ Todos & Improvements

* [ ] Add pagination to GET all books
* [ ] Add database (MongoDB or PostgreSQL)
* [ ] Add Swagger documentation
* [ ] Add more unit tests

---

## 📝 License

This project is licensed under the MIT License.

---

Made with ❤️ by [Snehasish Das](https://github.com/snehasishdasz)
