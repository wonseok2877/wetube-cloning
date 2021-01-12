/* how the node.js project works??
 1. how do I install node packages including express? : npm. node package manager. npm comes with node.js, so don't worry. the command will automatically created.
require or import: importing 'express' folder from the node_modules. then, wtf is the 'express' here? it is a bunch of requires*/

// const express = require("express"); in here, we use babel, which compiles new sexy ES6 syntax to normal javascript.
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

// cookie-parser as a cookie defining middleware.
app.use(cookieParser());
// body-parser as a body defining middleware. in here, it is defining json and urlencoded.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// helmet as a security middleware.
app.use(helmet());
// morgan as a logging middleware. it has some options to logging, and they show us many informations.
app.use(morgan("dev"));

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
export : when somebody import my file, I'm going to give him the app object
the app object is that we configured such as app.use ~, app.get ~  */
export default app;
