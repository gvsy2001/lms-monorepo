import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

interface DecodedUser {
  id: string;
  role: string;
  iat: number;
  exp: number;
}

export const protect = (req: Request & { user?: DecodedUser }, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Not authorized, no token" });
  }

  try {
    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as DecodedUser;
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Token failed or expired" });
  }
};

export const adminOnly = (req: Request & { user?: DecodedUser }, res: Response, next: NextFunction) => {
  if (req.user?.role !== "admin") {
    return res.status(403).json({ message: "Admin access only" });
  }
  next();
};
