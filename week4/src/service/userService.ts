import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// 유저 생성
const createUser = async (name: string, email: string, age: number) => {
  const data = await prisma.user.create({  // prisma를 이용해 user table에 create
    data: {
      userName: name, // DB에는 name이라는 필드가 없지만, 이런식으로는 가능(스키마에 선언된 필드 userName에는 controller에서 name으로 받은 것을 넣어주라~)
      age,
      email,
    }
  });

  return data;
};

// 유저 전체 조회
const getAllUser = async () => {
  const data = await prisma.user.findMany();
  return data;
};

// 유저 정보 업데이트
const updateUser = async (userId: number, name: string) => {
  const data = await prisma.user.update({
    where: { // 어디를 (??)
      id: userId
    },
    data: { // 어떻게 바꿀건지 (??맞나..)
      userName: name
    }  
  })
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
  const user = await prisma.user.findUnique({ // id는 PK -> unique
    where: {
      id: userId, // where : 일종의 필터. 조건. id가 userId인 경우만 조회
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
