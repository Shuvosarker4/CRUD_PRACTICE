import express, { Request, Response } from "express";
import { StudentRoutes } from "./modules/Student.route";
const app = express();

app.use(express.json());

app.use("/students", StudentRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello world!");
});

export default app;
