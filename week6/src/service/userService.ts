import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// 유저 생성
const createUser = async (name: string, email: string, age: number) => {
  const data = await prisma.user.create({
    data: {
      userName: name,
      email,
      age,
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
      user_id: userId,
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
      user_id: userId,
    },
  });
};

//* userId로 유저 조회
const getUserById = async (userId: number) => {
  const user = await prisma.user.findUnique({
    where: {
      user_id: userId,
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
