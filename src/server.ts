import app from "./app";
import mongoose from "mongoose";

async function main() {
  await mongoose.connect(
    "mongodb+srv://student_api:xylrD8a2dtWVL24I@cluster0.zjkcwvl.mongodb.net/student_info?retryWrites=true&w=majority&appName=Cluster0"
  );

  const port = 3000;
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}

main();
