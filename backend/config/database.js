import mongoose from "mongoose";
import config from "./index.js";

//Database initialization
mongoose
  .connect(config.database_url)
  .then(() => console.log(`MongoDB is connected successfully!!`))
  .catch((error) =>
    console.log(`Apology, Database connection error: ${error}`)
  );
