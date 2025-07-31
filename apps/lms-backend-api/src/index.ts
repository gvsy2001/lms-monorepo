import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db";
import authRoutes from "./routes/authRoutes";
import courseRoutes from "./routes/coursesRoutes";
import { setupSwagger } from "./swagger";


dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// DB connection
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/courses", courseRoutes);

// Swagger
setupSwagger(app);

app.get("/", (_req, res) => {
  res.send("LMS Backend API is running.");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`Swagger UI available at http://localhost:${PORT}/api-docs`);
});
