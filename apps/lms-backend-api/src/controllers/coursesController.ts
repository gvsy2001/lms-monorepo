import { Request, Response } from "express";
import Course from "../models/Course";

export const createCourse = async (req: Request, res: Response) => {
  const { title, description } = req.body;

  try {
    const newCourse = await Course.create({
      title,
      description,
      createdBy: req.user?.id,
    });
    res.status(201).json(newCourse);
  } catch (error) {
    res.status(500).json({ message: "Failed to create course", error });
  }
};

export const getAllCourses = async (req: Request, res: Response) => {
  try {
    const courses = await Course.find();
    res.status(200).json(courses);
  } catch (error) {
    res.status(500).json({ message: "Failed to get courses", error });
  }
};

export const getCourseById = async (req: Request, res: Response) => {
  try {
    const course = await Course.findById(req.params.id);
    if (!course) return res.status(404).json({ message: "Course not found" });

    res.status(200).json(course);
  } catch (error) {
    res.status(500).json({ message: "Error getting course", error });
  }
};

export const updateCourse = async (req: Request, res: Response) => {
  try {
    const course = await Course.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!course) return res.status(404).json({ message: "Course not found" });

    res.status(200).json(course);
  } catch (error) {
    res.status(500).json({ message: "Error updating course", error });
  }
};

export const deleteCourse = async (req: Request, res: Response) => {
  try {
    const course = await Course.findByIdAndDelete(req.params.id);
    if (!course) return res.status(404).json({ message: "Course not found" });

    res.status(200).json({ message: "Course deleted" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting course", error });
  }
};
