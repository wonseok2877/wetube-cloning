import express from "express";
import routes from "../routes";
import {
  videoDetail,
  videoDelete,
  video,
  videoGetUpload,
  videoPostUpload,
  getVideoEdit,
  postVideoEdit,
} from "../controllers/videoController";
import { uploadVideoMiddleware } from "../middlewares";

const videoRouter = express.Router();

videoRouter.get("/", video);
// get & post upload
videoRouter.get(routes.upload, videoGetUpload);
videoRouter.post(routes.upload, uploadVideoMiddleware, videoPostUpload);
// routes의 함수들을 실행시켜야 해. express는 parameter을 원하지 id를 원하는게 아니거든.
videoRouter.get(routes.videoDetail(), videoDetail);
videoRouter.get(routes.deleteVideo(), videoDelete);
// get  & post edit
// 여기다 id 넣으면 안됨. express는 parameter을 원하지 id를 원하는게 아니거든.
videoRouter.get(routes.editVideo(), getVideoEdit);
videoRouter.post(routes.editVideo(), postVideoEdit);

// this export means, exporting everything in this file
export default videoRouter;
