const upload = require("../config/multer");
const { uploadThumbnail } = require("../controller/upload.controller");
const { validateUser } = require("../controller/users.controller");
const router = require("express").Router();

router.post(
  "/upload-thumbnail",
  validateUser,
  upload.single("file"),
  uploadThumbnail
);

module.exports = router;
