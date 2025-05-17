import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
import bookRoutes from './routes/bookRoutes';
import { errorHandler } from './middlewares/errorHandler';

dotenv.config();
const app = express();

// Middlewares
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use('/api', bookRoutes);

// Error handler middleware
app.use(errorHandler);

export default app;