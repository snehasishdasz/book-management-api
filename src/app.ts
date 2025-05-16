import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';

dotenv.config();
const app = express();

// Middlewares
app.use(morgan('dev'));
app.use(express.json());

export default app;