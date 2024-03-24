import express from "express";
import projectRouter from "./route/project.route.js";
const app = express();
import cors from "cors";
import cookieParser from "cookie-parser";
import userRouter from "./route/user.route.js";
// middlewares
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: ["http://localhost:3000/", "http://localhost:3000"], // Adjust if necessary
    credentials: true, // Enable cookies for cross-origin requests (if applicable)
  })
);
app.use(express.json());
app.use(cookieParser());
app.use("/api/", projectRouter);
app.use("/api/", userRouter);

export default app;
