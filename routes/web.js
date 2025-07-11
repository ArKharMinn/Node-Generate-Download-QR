const express = require("express");
const router = express.Router();
const QrController = require("../Controllers/QrController");

router.get("/", QrController.index);
router.post("/generate", QrController.generate);

module.exports = router;
