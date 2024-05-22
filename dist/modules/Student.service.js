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
exports.StudentService = void 0;
const Student_model_1 = require("./Student.model");
const createStudentInDB = (studentData) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield Student_model_1.StudentModel.create(studentData);
    return result;
});
const getAllStudentFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield Student_model_1.StudentModel.find();
    return result;
});
const getSingleStudentFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield Student_model_1.StudentModel.find({ id: id });
    return result;
});
const getStudentByEmailFromDb = (mail) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield Student_model_1.StudentModel.findOne({ email: mail });
    return result;
});
exports.StudentService = {
    createStudentInDB,
    getAllStudentFromDB,
    getSingleStudentFromDB,
    getStudentByEmailFromDb,
};
