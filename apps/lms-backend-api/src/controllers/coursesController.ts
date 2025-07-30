// src/controllers/coursesController.ts

import { Request, Response } from 'express';

export const getCourses = (req: Request, res: Response) => {
  return res.json([
    { id: 1, title: 'Intro to TypeScript', level: 'Beginner' },
    { id: 2, title: 'Advanced React', level: 'Advanced' },
  ]);
};
