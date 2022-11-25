import { UserCreateDTO } from "./../../../week4/src/interfaces/UserCreateDTO";
import { validationResult } from "express-validator";
import { Request, Response } from "express";
import { userService } from "../service";
import { rm, sc } from "../constants";
import { fail, success } from "../constants/response";
import jwtHandler from "../modules/jwtHandler";

// 유저 생성
const createUser = async (req: Request, res: Response) => {
  // validation의 결과를 바탕으로 분기 처리
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return res
      .status(sc.BAD_REQUEST)
      .send(fail(sc.BAD_REQUEST, rm.BAD_REQUEST));
  }

  // 기존 비구조화 할당 방식 -> DTO의 형태
  const UserCreateDto: UserCreateDTO = req.body;
  const data = await userService.createUser(UserCreateDto);

  if (!data) {
    return res
      .status(sc.BAD_REQUEST)
      .send(fail(sc.BAD_REQUEST, rm.SIGNUP_FAIL));
  }

  // jwtHandler 내 sign 함수를 이용해 accessToken 생성
  const accessToken = jwtHandler.sign(data.id);

  const result = {
    id: data.id,
    name: data.userName,
    accessToken,
  };

  return res
    .status(sc.CREATED)
    .send(success(sc.CREATED, rm.SIGNUP_SUCCESS, result));
};

// 유저 전체 조회
const getAllUser = async (req: Request, res: Response) => {
  const data = await userService.getAllUser();
  return res
    .status(200)
    .json({ status: 200, message: "유저 전체 조회 성공", data });
};

// 유저 정보 업데이트
const updateUser = async (req: Request, res: Response) => {
  const { userName } = req.body;
  const { userId } = req.params;

  if (!userName)
    return res
      .status(400)
      .json({ status: 400, message: "유저 업데이트 실패 " });

  const updatedUser = await userService.updateUser(+userId, userName); // path parameter로 받으면 string이니까 꼼수써주기!
  return res
    .status(200)
    .json({ status: 200, message: "유저 업데이트 성공", updatedUser });
};

// 유저 삭제
const deleteUser = async (req: Request, res: Response) => {
  const { userId } = req.params;

  await userService.deleteUser(+userId);
  return res.status(200).json({ status: 200, message: "유저 삭제 성공" });
};

// 특정 유저 조회
const getUserById = async (req: Request, res: Response) => {
  const { userId } = req.params;

  const data = await userService.getUserById(+userId);

  if (!data) {
    return res.status(404).json({ status: 404, message: "NOT_FOUND" });
  }
  return res.status(200).json({ status: 200, message: "유저 조회 성공", data });
};

const userController = {
  createUser,
  getAllUser,
  updateUser,
  deleteUser,
  getUserById,
};

export default userController;
