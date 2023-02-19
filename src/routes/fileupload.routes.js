import { Router } from "express";
import multer from "multer";
// const multer = require("multer");

const router = Router();

import controller from "../controllers/fileupload.controller";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    console.log(file.mimetype);
    //cb(null, file.originalname + '-' + Date.now());
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

router.get("/download/:filename", controller.getFile);

router.post("/", upload.single("file"), controller.uploadFile);

export default router;
