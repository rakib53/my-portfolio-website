const mongoose = require("mongoose");

// Product Schema
const ProjectsSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      require: false,
    },
    liveSiteLink: {
      type: String,
      require: false,
    },
    githubLink: {
      type: String,
      require: false,
    },
    thumbnail: {
      type: mongoose.Schema.ObjectId,
      ref: "Files",
    },
    description: {
      type: String,
      require: false,
    },
    technologies: {
      type: [String],
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

// Exporting both models
const ProjectModel = mongoose.model("Projects", ProjectsSchema);

module.exports = { ProjectModel };
