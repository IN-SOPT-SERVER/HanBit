import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import { sc } from "../constants";
import { UserCreateDTO } from "../interfaces/UserCreateDTO";
import { UserSignInDTO } from "../interfaces/UserSignInDTO";

const prisma = new PrismaClient();

//* 로그인
const signIn = async (userSignInDto: UserSignInDTO) => {
  try {
    const user = await prisma.user.findFirst({
      where: {
        email: userSignInDto.email,
      },
    });
    if (!user) return null;

    //? bcrypt가 DB에 저장된 기존 password와 넘겨 받은 password를 대조하고,
    //? match false시 401을 리턴
    const isMatch = await bcrypt.compare(userSignInDto.password, user.password);
    if (!isMatch) return sc.UNAUTHORIZED;

    return user.user_id;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

// 유저 생성
const createUser = async (userCreateDto: UserCreateDTO) => {
  //? 넘겨받은 password를 bcrypt의 도움을 받아 암호화
  const salt = await bcrypt.genSalt(10); //^ 매우 작은 임의의 랜덤 텍스트 salt
  const password = await bcrypt.hash(userCreateDto.password, salt); //^ 위에서 랜덤을 생성한 salt를 이용해 암호화

  const data = await prisma.user.create({
    data: {
      userName: userCreateDto?.name,
      age: userCreateDto?.age,
      email: userCreateDto.email,
      password,
    },
  });

  return data;
};

// 유저 전체 조회
const getAllUser = async (page: number, limit: number) => {
  const data = await prisma.user.findMany({
    skip: (page - 1) * limit, // 얼마나 건너뛸지 설정 가능
    take: limit,
  });

  return data;
};

// 유저 정보 업데이트
const updateUser = async (userId: number, name: string) => {
  const data = await prisma.user.update({
    where: {
      // 어디를 (??)
      user_id: userId, // 내가 마음대로 정한 userId라는 이름으로 받은 값을 DB의 id 필드에 담는다.
    },
    data: {
      // 어떻게 바꿀건지 (??맞나..)
      userName: name,
    },
  });
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
    // id는 PK -> unique
    where: {
      user_id: userId, // where : 일종의 필터. 조건. id가 userId인 경우만 조회
    },
  });

  return user;
};

// 이름으로 유저 조회 ( query )
const searchUserByName = async (keyword: string, option: string) => {
  // 유저 최신순
  if (option === "desc") {
    const data = await prisma.user.findMany({
      where: {
        userName: {
          contains: keyword,
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return data;
  } else if (option == "asc") {
    // 유저 오래된 순
    const data = await prisma.user.findMany({
      where: {
        userName: {
          contains: keyword,
        },
      },
      orderBy: {
        createdAt: "asc",
      },
    });
    return data;
  } else if (option === "nameDesc") {
    // 이름 알파벳으로 정렬
    const data = await prisma.user.findMany({
      where: {
        userName: {
          contains: keyword,
        },
      },
      orderBy: {
        userName: "desc",
      },
    });
    return data;
  }
};

// 이름 + 옵션으로 유저 조회 ( query )


// 조회 시 페이지네이션

const userService = {
  signIn,
  createUser,
  getAllUser,
  updateUser,
  deleteUser,
  getUserById,
  searchUserByName
};

export default userService;
