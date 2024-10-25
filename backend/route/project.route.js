import { Router } from "express";
import {
  createProject,
  deleteProject,
  getProjects,
  sendQueryEmail,
} from "../controller/project.controller.js";
import { validateUser } from "../controller/user.controller.js";
const router = Router();

router.get("/get-projects", getProjects);
router.post("/send-email", sendQueryEmail);
router.post("/create-project", validateUser, createProject);
router.delete("/delete-project/:id", validateUser, deleteProject);
export default router;
