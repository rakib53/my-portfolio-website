const { UploadModel } = require("../model/upload.model");

const uploadThumbnail = async (req, res, next) => {
  try {
    if (!req.file) {
      return res.status(400).send("No file uploaded.");
    }

    const newFiles = {
      name: req.file.originalname,
      mimetype: req.file.mimetype,
      destination: `/files/${req.file.filename}`,
      size: req.file.size,
    };

    const isFileUploaded = await UploadModel.create(newFiles);

    if (isFileUploaded) {
      res.status(200).json({
        message: "File uploaded successfully!",
        filePath: `/uploads/${req.file.filename}`,
      });
    } else {
      res.status(404).json({
        message: "Error occurred while uploading file!",
        filePath: null,
      });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  uploadThumbnail,
};
