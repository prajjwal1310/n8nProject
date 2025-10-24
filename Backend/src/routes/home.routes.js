const express = require('express');
const router = express.Router();
const  uploadController  = require("../controllers/upload.controller")
const multer = require("multer");
const authMiddleware = require("../middlewares/auth.middleware");

const upload = multer({ storage: multer.memoryStorage() });

router.post("/form-submission", authMiddleware, upload.single("video"), uploadController)

module.exports = router;