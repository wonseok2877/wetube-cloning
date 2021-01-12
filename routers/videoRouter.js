import express from "express";
import routes from "../routes";
import {
  videos,
  videoUpload,
  videoDetail,
  videoEdit,
  videoDelete,
} from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get("/", videos);

videoRouter.get(routes.upload, videoUpload);
videoRouter.get(routes.videoDetail, videoDetail);
videoRouter.get(routes.editVideo, videoEdit);
videoRouter.get(routes.deleteVideo, videoDelete);

// this export means, exporting everything in this file
export default videoRouter;
