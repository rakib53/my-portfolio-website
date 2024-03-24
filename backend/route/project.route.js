import { Router } from "express";
import {
  createProject,
  deleteProject,
  getProjects,
} from "../controller/project.controller.js";
const router = Router();

router.get("/get-projects", getProjects);
router.post("/create-project", createProject);
router.delete("/delete-project/:id", deleteProject);
export default router;
