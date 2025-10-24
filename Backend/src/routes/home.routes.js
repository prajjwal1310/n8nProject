const express = require('express');
const router = express.Router();
const  uploadController  = require("../controllers/upload.controller")
const multer = require("multer");

const upload = multer({ storage: multer.memoryStorage() });

router.post("/form-submission", upload.single("video"), uploadController)

module.exports = router;