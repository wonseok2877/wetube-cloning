import express from "express";
import routes from "../routes";
import { join, login, logout } from "../controllers/userController";
import { videoHome, videoSearch } from "../controllers/videoController";

// this is the only way to exclusively handle routers ! but this is just for the url, not for the controllers
const globalRouter = express.Router();

/* 8-4. how to use routes in organized way?
divide and conquer ! this file only focuses on the global routes 
and the functions of each url routes. so much organized. */
// I'm auto-importing the functions from controller.js
globalRouter.get(routes.home, videoHome);
globalRouter.get(routes.search, videoSearch);
globalRouter.get(routes.join, join);
globalRouter.get(routes.login, login);
globalRouter.get(routes.logout, logout);

export default globalRouter;
