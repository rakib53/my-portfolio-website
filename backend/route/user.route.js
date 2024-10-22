import { Router } from "express";
import {
  getUserInfo,
  Login,
  validateUser,
} from "../controller/user.controller.js";
const router = Router();

router.get("/user-info", validateUser, getUserInfo);
router.post("/signin", Login);
export default router;
