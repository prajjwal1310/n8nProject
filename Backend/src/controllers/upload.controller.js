const imagekit = require("../services/imagekit.service");

async function uploadFile(req, res) {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    const result = await imagekit.upload({
      file: req.file.buffer,
      fileName: req.file.originalname,
      folder: "/videos",
      useUniqueFileName: true,
    });

    res.status(200).json({
      message: "Video uploaded successfully",
      fileUrl: result.url,
      fileId: result.fileId,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Upload failed", error });
  }
};

module.exports = uploadFile;