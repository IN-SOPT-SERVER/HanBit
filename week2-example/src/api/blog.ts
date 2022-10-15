// src/api/blog.ts

import express, { Request, Response, Router } from "express";
// express 모듈에서 express, (request, response, router)-> 타입 정의를 위해 불러옴!

const router: Router = express.Router();

router.get("/", (req: Request, res: Response) => {
  return res.status(200).json({
    status: 200,
    title: '블로그1',
    content: '오늘은 2차 세미나였다...',
  });
});

module.exports = router;