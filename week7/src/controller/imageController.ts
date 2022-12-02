import { Request, Response } from "express";
import { rm, sc } from "../constants";
import { fail, success } from "../constants/response";
import { imageService } from "../service";

// 이미지 업로드 API
const uploadImage = async (req: Request, res: Response) => {
  // Express에서 지원하는 타입
  const image: Express.MulterS3.File = req.file as Express.MulterS3.File;
  const { location } = image;

  if (!location) {
    res.status(sc.BAD_REQUEST).send(fail(sc.BAD_REQUEST, rm.NO_IMAGE));
  }

  // 이미지만 전송받을 것이니 이 file을 imageService로 그대로 던져줌
  const data = await imageService.uploadImage(location);

  if (!data) {
    res.status(sc.BAD_REQUEST).send(fail(sc.CREATED, rm.CREATE_IMAGE_FAIL));
  }
  return res
    .status(sc.CREATED)
    .send(success(sc.CREATED, rm.CREATE_IMAGE_SUCCESS, data));
};

const imageController = {
  uploadImage,
};

export default imageController;
