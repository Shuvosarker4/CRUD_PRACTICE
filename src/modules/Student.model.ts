import { Schema, model } from "mongoose";
import { Student } from "./Student.inteface";

const StudentSchema = new Schema<Student>({
  id: { type: Number, required: true, unique: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
});

export const StudentModel = model<Student>("Student", StudentSchema);
