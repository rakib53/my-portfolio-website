import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import projectRouter from "./route/project.route.js";
import userRouter from "./route/user.route.js";
const app = express();
// middlewares
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://www.rakib-dev.com",
      "http://www.rakib-dev.com",
      "https://rakib-dev.com",
      "http://rakib-dev.com",
    ],
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());
app.use("/api/v1", projectRouter);
app.use("/api/v1", userRouter);

export default app;
