"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentRoutes = void 0;
const express_1 = __importDefault(require("express"));
const Student_controllers_1 = require("./Student.controllers");
const router = express_1.default.Router();
router.post("/", Student_controllers_1.StudentController.createStudent);
router.get("/", Student_controllers_1.StudentController.getAllStudent);
router.get("/:id", Student_controllers_1.StudentController.getSingleStudent);
// router.get("/", StudentController.getStudentByEmail);
exports.StudentRoutes = router;
