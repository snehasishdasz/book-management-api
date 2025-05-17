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

Unit tests are written using **Jest** and located in the `src/tests` directory.

### Sample Test: `POST /api/books`

Tests the book creation endpoint with valid and invalid data.

```bash
npm test
```

To run tests in watch mode:

```bash
npm run test:watch
```

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

**[📩 View Postman Collection](https://book-management-9334.postman.co/workspace/book-management-Workspace~84b7e12b-c20d-4c88-88d9-244559f8cc2d/collection/37182674-93c98434-b858-443e-a558-9bd5bfe11da4?action=share&creator=37182674&active-environment=37182674-60d23f06-a0bf-40fd-a95b-b4db75b740f2)**

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
