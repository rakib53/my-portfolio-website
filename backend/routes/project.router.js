const {
  getProjects,
  sendQueryEmail,
  createProject,
  deleteProject,
} = require("../controller/project.controller");
const { validateUser } = require("../controller/users.controller");
const router = require("express").Router();

router.get("/get-projects", getProjects);
router.post("/send-email", sendQueryEmail);
router.post("/create-project", validateUser, createProject);
router.delete("/delete-project/:id", validateUser, deleteProject);

module.exports = router;
