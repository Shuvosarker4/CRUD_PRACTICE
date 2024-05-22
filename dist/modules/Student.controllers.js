"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentController = void 0;
const Student_service_1 = require("./Student.service");
const createStudent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        const result = yield Student_service_1.StudentService.createStudentInDB(data);
        res.json({
            success: true,
            message: "Got the data",
            data: result,
        });
    }
    catch (err) {
        res.send(err);
    }
});
const getAllStudent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const email = req.query.email;
        const data = `${email}`;
        if (email) {
            const result = yield Student_service_1.StudentService.getStudentByEmailFromDb(data);
            res.json({
                success: true,
                message: "Got the data",
                data: result,
            });
        }
        else {
            const result = yield Student_service_1.StudentService.getAllStudentFromDB();
            res.json({
                success: true,
                message: "Got the data",
                data: result,
            });
        }
    }
    catch (err) {
        res.json({
            success: false,
            message: "Failed to fetch",
            data: err,
        });
    }
});
const getSingleStudent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const getId = req.params.id;
        const id = parseInt(getId);
        // console.log(getId);
        const result = yield Student_service_1.StudentService.getSingleStudentFromDB(id);
        res.json({
            success: true,
            message: "Got the data",
            data: result,
        });
    }
    catch (err) {
        res.json({
            success: true,
            message: "Failed to fetch data",
            data: err,
        });
    }
});
// const getStudentByEmail = async (req: Request, res: Response) => {
//   const email = req.query;
//   console.log(email);
//   res.send(email);
// };
exports.StudentController = {
    createStudent,
    getAllStudent,
    getSingleStudent,
};
