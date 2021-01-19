// import { user } from "./middlewares";
/* 8-2. global routes
whenever we need to change url or use them elsewhere,
it's helpful to divide and conquer, so we don't have to remember the whole structure.  */
// global url
const HOME = "/";
const JOIN = "/join";
const LOGIN = "/login";
const LOGOUT = "/logout";
const SEARCH = "/search";

// Users url
const USERS = "/users";
const EDIT_PROFILE = "/edit-profile";
const CHANGE_PASSWORD = "/change-password";
const USER_DETAIL = "/:id";

// Videos url
const VIDEOS = "/videos";
// ? : 아니 그냥 싹다 공통 적용하면 안 돼? 왜 template에서 다르게 적용하는거? 따로 쓸 필요가 있는 페이지들인건가?
const UPLOAD = "/upload";
const VIDEO_DETAIL = "/:id";
const EDIT_VIDEO = "/:id/edit";
const DELETE_VIDEO = "/:id/delete";

/* 8-3. how can we gather and organize the urls?
: make an object, using the variables that is pointing each of url ! */
const routes = {
  home: HOME,
  join: JOIN,
  login: LOGIN,
  logout: LOGOUT,
  search: SEARCH,
  users: USERS,
  /*12-1. routes의 url 포인팅 자체를 함수로 만든다.
   template에서 유저마다 각각 다르게 보내는 id 값을 받을 준비를 하는 것.*/
  userDetail: (id) => {
    if (id) {
      return `${USERS}/${id}`;
    } else {
      return USER_DETAIL;
    }
  },
  editProfile: EDIT_PROFILE,
  changePassword: CHANGE_PASSWORD,
  videos: VIDEOS,
  upload: UPLOAD,
  videoDetail: (id) => {
    if (id) {
      return `${VIDEOS}/${id}`;
    } else {
      return VIDEO_DETAIL;
    }
  },
  editVideo: EDIT_VIDEO,
  deleteVideo: DELETE_VIDEO,
};

// by exporting, now I can use them everywhere.
export default routes;
