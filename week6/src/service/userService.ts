import bcrypt from "bcryptjs";
import { UserCreateDTO } from "./../../../week4/src/interfaces/UserCreateDTO";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// 유저 생성
const createUser = async (userCreateDto: UserCreateDTO) => {
  // 넘겨받은 password를 bcrypt의 도움을 받아 암호화
  const salt = await bcrypt.genSalt(10); // 매우 작은 임의의 랜덤 텍스트 salt
  const password = await bcrypt.hash(userCreateDto.password, salt); // 위에서 랜덤을 생성한 salt를 이용해 암호화

  const data = await prisma.user.create({
    data: {
      userName: userCreateDto?.name,
      email: userCreateDto.email,
      age: userCreateDto?.age,
      password,
    },
  });

  return data;
};

// 유저 전체 조회
const getAllUser = async () => {
  const data = await prisma.user.findMany();
  return data;
};

// 유저 정보 업데이트
const updateUser = async (userId: number, userName: string) => {
  const data = await prisma.user.update({
    where: {
      id: userId,
    },
    data: {
      userName,
    },
  });

  return data;
};

// 유저 삭제
const deleteUser = async (userId: number) => {
  await prisma.user.delete({
    where: {
      id: userId,
    },
  });
};

//* userId로 유저 조회
const getUserById = async (userId: number) => {
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });

  return user;
};

const userService = {
  createUser,
  getAllUser,
  updateUser,
  deleteUser,
  getUserById,
};

export default userService;
