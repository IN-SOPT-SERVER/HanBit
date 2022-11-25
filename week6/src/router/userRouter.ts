import { Router } from "express";
import { userController } from "../controller";
import auth from "../middlewares/auth";

const router: Router = Router();

router.get("/:userId", auth, userController.getUserById);

// 전체 유저 조회 - GET api/user
router.get("/", userController.getAllUser);

// 유저 생성 - POST api/user
router.post("/", userController.createUser);

// 유저 정보 업데이트 - PATCH api/user/:userId
router.patch("/:userId", userController.updateUser);

// 유저 삭제 - DELETE api/user/:userId
router.delete("/:userId", userController.deleteUser);

export default router;
