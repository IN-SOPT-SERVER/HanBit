import { Router } from "express";
import { imageController } from "../controller";
import { upload } from "../middlewares";

const router: Router = Router();

// 단일 파일 가져올 때 single
router.post("/", upload.single("file"), imageController.uploadImage);

export default router;
