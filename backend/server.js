import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import "./config/database.js";
import config from "./config/index.js";
import projectRouter from "./route/project.route.js";
import userRouter from "./route/user.route.js";
const app = express();

// Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    credentials: true,
    origin: (origin, callback) => {
      const whitelist = [
        "http://localhost:3000",
        "https://www.rakib-dev.com",
        "http://www.rakib-dev.com",
        "https://rakib-dev.com",
        "http://rakib-dev.com",
      ];
      if (whitelist.indexOf(origin) !== -1 || !origin) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
  })
);

// User API
app.use("/api/v1", userRouter);
app.use("/api/v1", projectRouter);

// Error Handling
app.use((err, req, res, next) => {
  const statusCode = err.status || 500;
  const message = err.message || "Something went wrong!!";
  res.status(statusCode).json({ message });
});

// Root Route
app.get("/", (req, res) => {
  res.status(201).json({ message: "Rakib portfolio backend!" });
});

// Catch-All Route for Undefined Routes
app.use("*", (req, res) => {
  res.status(404).json({ message: "Route not found!" });
});

// Start the Express Server
app.listen(config.port, () => {
  console.log(`Server running at http://localhost:${config.port}`);
});
