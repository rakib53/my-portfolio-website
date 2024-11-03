const mongoose = require("mongoose");

// Product Schema
const UploadSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: false,
    },
    mimetype: {
      type: String,
      require: false,
    },
    destination: {
      type: String,
      require: true,
    },
    size: {
      type: Number,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

// Exporting both models
const UploadModel = mongoose.model("Files", UploadSchema);
module.exports = { UploadModel };
