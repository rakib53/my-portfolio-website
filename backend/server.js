const express = require("express");
const app = express();
const config = require("./config/config");
require("./config/db");
const cors = require("cors");
const path = require("path");
const cookieParser = require("cookie-parser");
const UserRouter = require("./routes/user.router");
const ProjectRouter = require("./routes/project.router");
const UploadRouter = require("./routes/upload.router");

// Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    credentials: true,
    origin: (origin, callback) => {
      const whitelist = [
        "http://localhost:3000",
        "http://localhost:5173",
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
app.use("/api/v1", UserRouter);
app.use("/api/v1", ProjectRouter);
app.use("/api/v1", UploadRouter);

// Serve static files from the "files" directory
app.use("/files", express.static(path.join(__dirname, "files")));

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
