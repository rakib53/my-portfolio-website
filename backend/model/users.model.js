const mongoose = require("mongoose");

const UserModel = mongoose.Schema({
  email: {
    type: String,
    require: false,
  },
  password: {
    type: String,
    require: false,
  },
});

module.exports = mongoose.model("User", UserModel);
