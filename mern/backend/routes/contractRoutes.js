const express = require("express");
const multer = require("multer");
const { v4: uuidv4 } = require("uuid");
const {
  createContract,
  getContracts,
  deleteContract,
  previewContract,
} = require("../controllers/contractController");
const router = express.Router();

// Set up multer for file uploads (store files in uploads folder)
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = `${uuidv4()}-${Date.now()}.pdf`;
    cb(null, file.fieldname + "-" + uniqueSuffix);
  },
});
const upload = multer({ storage: storage });

// Contract routes
router.post("/upload", upload.single("file"), createContract);
router.get("/", getContracts);
router.delete("/:id", deleteContract);
router.get("/preview/:filename", previewContract);

module.exports = router;
