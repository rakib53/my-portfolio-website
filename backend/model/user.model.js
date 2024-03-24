import mongoose from "mongoose";

const User = mongoose.Schema({
  email: {
    type: String,
    require: false,
  },
  password: {
    type: String,
    require: false,
  },
});

export default mongoose.model("user", User);
