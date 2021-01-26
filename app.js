/* how the node.js project works??
 1. how do I install node packages including express? : npm. node package manager. npm comes with node.js, so don't worry. the command will automatically created.
require or import: importing 'express' folder from the node_modules. then, wtf is the 'express' here? it is a bunch of requires*/

// const express = require("express"); from now, we use babel, which compiles new sexy ES6 syntax to normal javascript.
import express from "express";
// morgan : a middleware helps us for logging
import morgan from "morgan";
// helmet : middleware for security
import helmet from "helmet";
// cookie-parser & body-parser
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
// we didn't export the router as default, so syntax is different
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";
import routes from "./routes";
import { helmetFuck, localsMiddleware } from "./middlewares";

// making application of express
const app = express();

/* 3. request & response : we can get informaion from the server, using http methods. */
// const handleHome = (req, res) => res.send("hello there! plz suck my dick😈");
// const handleProfile = (req, res) => res.send("you are on my profile");

/* 5. middleware : between user's requests and server's last response, 
there has to be middleware! every function in express can be middleware. 
here, in handleHome and handleProfile, don't have `next` as argument. because they are the start and the end.*/

/* 5-1. applying middleware
we can apply the middleware globally, if we put this on the top of codes that we want to apply middleware by order principle of javascript.
Or we can apply locally, by put the middleware function between the route and callback functions. */

/* 5-2. four middlewares to make our wetube. they were wrote according to the order principle.
first, cookie-parser defines cookie. second, body-parser defines body. 
third, helmet will make security. the last,  morgan will log everything. and then finally, we arrive to our routes. */

// helmet as a security middleware.
app.use(helmet());
// 10-2. how to set pug as a view engine? pug과 express에는 view파일들의 위치에 관한 기본 설정이 있음
app.set("view engine", "pug");
/* 15-7. video upload를 위한 기본 route설정 
express.static() ! : directory에서 file을 보내주는 middleware
이 경우엔 /uploads 주소로 가면, upload라는 directory안으로 들어간다는 뜻이지. */
app.use("/uploads", express.static("uploads"));
// cookie-parser as a cookie defining middleware.
app.use(cookieParser());
// body-parser as a body defining middleware. in here, it is defining json and urlencoded.
// .json ! : change the json format into javascript object
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// morgan as a logging middleware. it has some options to logging, and they show us many informations.
app.use(morgan("dev"));

/* 10-3.  I wanna access from header partial to routes object !
: we have to use middleware.
locals : local variable into global variable */

app.use(localsMiddleware);

app.use(helmetFuck);
/* 4. how the connection starts? : when it starts, it will execute the index file. 
And the application(`app = express()`), and find the route(`"/"`), 
okay he is asking me for the home, and it will execute the handleHome. */
// app.get("/", handleHome);
// app.get("/profile", handleProfile);

/* 7-2. using the router !
use : I will use this whole router, that I defined in router.js 
so the url of useRouter will be ~3001/user as base. user/edit, user/password, user/etc */
app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

/* 6. how can we share the application that we made, with other file?
ES6 export !
: when somebody import my file, I'm going to give him the app object
the app object is that we configured such as app.use ~, app.get ~  */
export default app;
