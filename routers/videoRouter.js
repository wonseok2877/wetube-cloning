import express from "express";
import routes from "../routes";
import {
  videoDetail,
  videoEdit,
  videoDelete,
  video,
  videoGetUpload,
  videoPostUpload,
} from "../controllers/videoController";
import { uploadVideoMiddleware } from "../middlewares";

const videoRouter = express.Router();

videoRouter.get("/", video);

videoRouter.get(routes.upload, videoGetUpload);
videoRouter.post(routes.upload, uploadVideoMiddleware, videoPostUpload);
videoRouter.get(routes.videoDetail(), videoDetail);
videoRouter.get(routes.editVideo, videoEdit);
videoRouter.get(routes.deleteVideo, videoDelete);

// this export means, exporting everything in this file
export default videoRouter;
