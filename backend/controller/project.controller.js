import ProjectModel from "../model/project.model.js";

export const getProjects = async (req, res) => {
  const allProjects = await ProjectModel.find();
  res.send(allProjects);
};

export const createProject = async (req, res) => {
  const {
    title,
    description,
    liveSiteLink,
    githubLink,
    thumbnail,
    technologies,
  } = req?.body;

  const project = {
    title,
    description,
    liveSiteLink,
    githubLink,
    thumbnail,
    technologies,
  };
  const newProject = new ProjectModel(project);
  const savedProject = await newProject.save();
  if (savedProject?._id) {
    res.status(200).json(savedProject);
  } else {
    res.status(400).json({
      error: "Error creating project!",
    });
  }
};

export const deleteProject = async (req, res) => {
  const { id } = req.query;

  const deleteProject = await ProjectModel.deleteOne({ _id: id });
  if (deleteProject?.acknowledged) {
    res.status(200).json({ _id: id });
  } else {
    res.status(400).json({
      error: "Error deleting project!",
    });
  }
};
