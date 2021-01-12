import express from "express";
import routes from "../routes";
import {
  users,
  userEdit,
  userPassword,
  userDetail,
} from "../controllers/userController";

/* 7. router
router can be used to break down the complexity of each routes 
this router is from express and I'm exporting the router just itself, not as default. 
you can make maaaaaany routers as much as you want, like videoRouter, fuckRouter, etcRouter */
const userRouter = express.Router();

userRouter.get("/", users);
userRouter.get(routes.editProfile, userEdit);
userRouter.get(routes.changePassword, userPassword);
userRouter.get(routes.userDetail, userDetail);

export default userRouter;

/* 7-1. how can we use router?
very simple. router is just a bunch of routes and functions inside of it */
// userRouter.get("/", (req, res) => res.send("user index"));
// userRouter.get("/edit", (req, res) => res.send("user edit"));
// userRouter.get("/password", (req, res) => res.send("user password"));

/* 8. MVC pattern
: pattern of Model(data), View(shape of data = template), Control(functions that look for datas)
*/
/* 8-1. seperate our urls from the Control(functions) that execute them,
according to the shape of data looks */
