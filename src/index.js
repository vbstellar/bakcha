import dotenv from "dotenv";
// import mongoose from "mongoose";
// import { DB_Name } from "./constants";
import connectDB from "./db/page.js";

dotenv.config({
  path: "./env",
});

connectDB();

// import express from "express";
// const app = express();

// (async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_Name}`);
//     app.on("error", () => {
//       console.log("ERROR: ", error);
//       throw error;
//     });

//     app.listen(process.env.PORT, () => {
//       console.log(`Server is running on port ${process.env.PORT}`);
//     });
//   } catch (error) {
//     console.log("ERROR: ", error);
//     throw err;
//   }
// })();

// connectDB();
