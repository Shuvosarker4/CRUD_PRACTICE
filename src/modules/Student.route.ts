import express from "express";
import { StudentController } from "./Student.controllers";
const router = express.Router();

router.post("/", StudentController.createStudent);
router.get("/", StudentController.getAllStudent);
router.get("/:id", StudentController.getSingleStudent);
// router.get("/", StudentController.getStudentByEmail);

export const StudentRoutes = router;
