import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

//Database initialization
mongoose
  .connect(process.env.DB_URL) // process.env.DB_URL
  .then(() => console.log(`MongoDB is connected successfully!`))
  .catch((error) =>
    console.log(`Apology, Database connection error: ${error}`)
  );
