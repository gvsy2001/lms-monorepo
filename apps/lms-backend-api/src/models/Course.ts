import mongoose, { Document, Schema } from 'mongoose';

export interface ICourse extends Document {
  title: string;
  level: string;
  createdBy: mongoose.Types.ObjectId;
}

const CourseSchema = new Schema<ICourse>(
  {
    title: {
      type: String,
      required: true,
    },
    level: {
      type: String,
      required: true,
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Course = mongoose.model<ICourse>('Course', CourseSchema);
export default Course;
