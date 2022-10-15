// src/api/movie.ts

import express, { Request, Response, Router } from "express";
// express 모듈에서 express, (request, response, router)-> 타입 정의를 위해 불러옴!

const router: Router = express.Router();

router.get("/", (req: Request, res: Response) => {
  return res.status(200).json({
    status: 200,
    title: '바람과 함께 사라지다',
    year: '1980',
  });
});

module.exports = router;