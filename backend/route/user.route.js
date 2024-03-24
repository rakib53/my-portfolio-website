import { Router } from "express";
import { Login, validateUser } from "../controller/user.controller.js";
const router = Router();

router.post("/login", Login);
router.post("/validate-user", validateUser);
export default router;
