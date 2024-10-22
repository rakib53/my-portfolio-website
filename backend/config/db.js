import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();

//Database initialization
mongoose
  .connect(
    process.env.NODE_ENV === "production"
      ? process.env.REMOTE_DATABASE_URL
      : process.env.MONGODB_LOCALE_DATABASE
  )
  .then(() => console.log(`MongoDB is connected successfully!`))
  .catch((error) =>
    console.log(`Apology, Database connection error: ${error}`)
  );
