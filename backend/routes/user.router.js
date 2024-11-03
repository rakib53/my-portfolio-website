const {
  validateUser,
  getUserInfo,
  Login,
} = require("../controller/users.controller");
const router = require("express").Router();

router.get("/user-info", validateUser, getUserInfo);
router.post("/login", Login);
module.exports = router;
