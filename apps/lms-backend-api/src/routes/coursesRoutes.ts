// src/routes/coursesRoutes.ts

import express from 'express';
import { getCourses } from '../controllers/coursesController';
import { protectRoute } from '../middlewares/authMiddleware';

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Courses
 *   description: Courses endpoints (JWT Protected)
 */

/**
 * @swagger
 * /courses:
 *   get:
 *     summary: Get all courses (Protected)
 *     tags: [Courses]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of courses
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   title:
 *                     type: string
 *                   level:
 *                     type: string
 *       401:
 *         description: Unauthorized
 */
router.get('/', protectRoute, getCourses);

export default router;
