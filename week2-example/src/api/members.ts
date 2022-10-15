// src/api/members.ts

import express, { Request, Response, Router } from "express";
// express 모듈에서 express, (request, response, router)-> 타입 정의를 위해 불러옴!

const router: Router = express.Router();

const members: Server[] = [
    {
        name: '이종현',
        age: 26,
        where: '노원',
        like: '헬스',
        mbti: 'ENFJ',
        study: '알고리즘',
        haveSibling: true,
        willAppJam: false
    },
    {
        name: '한유진',
        age: 24,
        where: '잠실',
        like: '헬스',
        mbti: 'ISFJ',
        study: '알고리즘',
        haveSibling: true,
        willAppJam: true
    },
    {
        name: '장한빛',
        age: 24,
        where: '상봉',
        like: '웹툰',
        mbti: 'ESFP',
        study: '알고리즘',
        haveSibling: true,
        willAppJam: true
    },
    {
        name: '양지영',
        age: 25,
        where: '청량리',
        like: '아이스 아메리카노',
        mbti: 'INFJ',
        study: '사격',
        haveSibling: true,
        willAppJam: true
    }
];


// 2. 파트원 소개 배열에 타입으로 지정할 인터페이스 생성 및 타입 지정
interface Server {
    name: string;
    age: number;
    where: string;
    like: string;
    mbti: string;
    study: string;
    haveSibling: boolean;
    willAppJam: boolean;
}


router.get("/", (req: Request, res: Response) => {
  return res.status(200).json({
    data: members, // 밖에 선언해놔도 괜찮네,,, 전역변수
  });
});

module.exports = router;