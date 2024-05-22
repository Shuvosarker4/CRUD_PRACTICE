import { Student } from "./Student.inteface";
import { StudentModel } from "./Student.model";

const createStudentInDB = async (studentData: Student) => {
  const result = await StudentModel.create(studentData);
  return result;
};

const getAllStudentFromDB = async () => {
  const result = await StudentModel.find();
  return result;
};

const getSingleStudentFromDB = async (id: number) => {
  const result = await StudentModel.find({ id: id });
  return result;
};

const getStudentByEmailFromDb = async (mail: string) => {
  const result = await StudentModel.findOne({ email: mail });
  return result;
};

export const StudentService = {
  createStudentInDB,
  getAllStudentFromDB,
  getSingleStudentFromDB,
  getStudentByEmailFromDb,
};
