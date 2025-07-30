import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { connectDB } from './config/db';
import swaggerUi from 'swagger-ui-express';
import { swaggerSpec } from './docs/swagger';
import courseRoutes from './routes/coursesRoutes';




import authRoutes from './routes/authRoutes';
// import courseRoutes from './routes/courseRoutes'; // future routes


dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Swagger UI docs
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/courses', courseRoutes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// app.use('/api/courses', courseRoutes); // future: protected route

// Health Check
app.get('/api/health', (_, res) => {
  res.status(200).send('✅ LMS API is running');
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
  console.log(`📄 Swagger docs available at http://localhost:${PORT}/api/docs`);
});
