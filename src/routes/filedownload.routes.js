import { Router } from "express";

const router = Router();

import controller from "../controllers/filedownload.controller";

router.delete("/:filename", controller.deleteFile);

export default router;
