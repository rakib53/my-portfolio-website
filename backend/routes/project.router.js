const {
  getProjects,
  sendQueryEmail,
  createProject,
  deleteProject,
  getProject,
  editProject,
} = require("../controller/project.controller");
const { validateUser } = require("../controller/users.controller");
const router = require("express").Router();

router.get("/get-projects", getProjects);
router.get("/get-project/:project_id", getProject);
router.post("/send-email", sendQueryEmail);
router.post("/create-project", validateUser, createProject);
router.patch("/edit-project", validateUser, editProject);
router.delete("/delete-project/:id", validateUser, deleteProject);

module.exports = router;
