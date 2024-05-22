import { Request, Response } from "express";
import { StudentService } from "./Student.service";

const createStudent = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    const result = await StudentService.createStudentInDB(data);
    res.json({
      success: true,
      message: "Got the data",
      data: result,
    });
  } catch (err: any) {
    res.send(err);
  }
};

const getAllStudent = async (req: Request, res: Response) => {
  try {
    const email = req.query.email;

    const data = `${email}`;

    if (email) {
      const result = await StudentService.getStudentByEmailFromDb(data);
      res.json({
        success: true,
        message: "Got the data",
        data: result,
      });
    } else {
      const result = await StudentService.getAllStudentFromDB();
      res.json({
        success: true,
        message: "Got the data",
        data: result,
      });
    }
  } catch (err: any) {
    res.json({
      success: false,
      message: "Failed to fetch",
      data: err,
    });
  }
};

const getSingleStudent = async (req: Request, res: Response) => {
  try {
    const getId = req.params.id;
    const id = parseInt(getId);
    // console.log(getId);
    const result = await StudentService.getSingleStudentFromDB(id);
    res.json({
      success: true,
      message: "Got the data",
      data: result,
    });
  } catch (err: any) {
    res.json({
      success: true,
      message: "Failed to fetch data",
      data: err,
    });
  }
};

// const getStudentByEmail = async (req: Request, res: Response) => {
//   const email = req.query;
//   console.log(email);
//   res.send(email);
// };

export const StudentController = {
  createStudent,
  getAllStudent,
  getSingleStudent,
};
