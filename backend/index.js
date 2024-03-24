import app from "./app.js";
import "./config/db.js";
import dotenv from "dotenv";
dotenv.config();

app.get("/", (req, res) => {
  res.send("Rakib portfolio backend!");
});

// Error Handling
app.use((err, req, res, next) => {
  if (err) {
    res.status(err.status).json({ message: "Something went wrong!!" });
  }
});

app.listen(process.env.PORT, () => {
  console.log(`Server running at http://localhost:${process.env.PORT}/`);
});
