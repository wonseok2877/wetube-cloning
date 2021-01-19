import routes from "./routes";
import multer from "multer";

// we divided middleware from app.js
export const localsMiddleware = (req, res, next) => {
  /* 10-4. res.locals : express property to make 'view' to be able to render during req&res cycle.
  we can put any name after this, and it will be used in pug, #{siteName}.
  because the things in locals exist just like variables in the templates*/
  res.locals.siteName = "WeTube";
  // importing and adding routes in routes.js
  res.locals.routes = routes;
  //   don't forget, middleware은 next에 request를 전달해야해. in this case, middleware is between the connection and routes, so there will be next().
  res.locals.user = {
    isAuthentificated: true,
    id: 1,
  };
  next();
};

// helmet middleware problem
export const helmetFuck = (req, res, next) => {
  res.setHeader(
    "Content-Security-Policy",
    "script-src 'self' https://archive.org"
  );
  return next();
};

// 15-5. multer : 유저가 upload할 때 그 url을 반환해주는 middleware
const multerVideo = multer({ dest: "videos/" });
// .single : 오직 하나의 파일만 upload할 수 있도록. 뒤에는 videoupload 템플릿 input의 name
export const uploadVideoMiddleware = multerVideo.single("videoFile");
