import { Router } from "express";
import {
  createCourse,
  deleteCourse,
  getAllCourses,
  getCourseById,
  updateCourse,
} from "../controllers/coursesController";
import { protect, adminOnly } from "../middlewares/authMiddleware";

/**
 * @swagger
 * tags:
 *   name: Courses
 *   description: Course management APIs
 */

const router = Router();

/**
 * @swagger
 * /api/courses:
 *   get:
 *     tags: [Courses]
 *     summary: Get all courses
 *     responses:
 *       200:
 *         description: List of courses
 */
router.get("/", getAllCourses);

/**
 * @swagger
 * /api/courses/{id}:
 *   get:
 *     tags: [Courses]
 *     summary: Get course by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Single course object
 */
router.get("/:id", getCourseById);

/**
 * @swagger
 * /api/courses:
 *   post:
 *     tags: [Courses]
 *     summary: Create a new course (admin only)
 */
router.post("/", protect, adminOnly, createCourse);

/**
 * @swagger
 * /api/courses/{id}:
 *   put:
 *     tags: [Courses]
 *     summary: Update course by ID (admin only)
 */
router.put("/:id", protect, adminOnly, updateCourse);

/**
 * @swagger
 * /api/courses/{id}:
 *   delete:
 *     tags: [Courses]
 *     summary: Delete course by ID (admin only)
 */
router.delete("/:id", protect, adminOnly, deleteCourse);

export default router;
