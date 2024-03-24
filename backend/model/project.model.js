import mongoose from "mongoose";

const Project = mongoose.Schema({
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
    type: String,
    require: false,
  },
  description: {
    type: String,
    require: false,
  },
  technologies: {
    type: [String],
    default: [],
  },
});

export default mongoose.model("project", Project);
