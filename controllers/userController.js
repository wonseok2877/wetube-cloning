import routes from "../routes";
import User from "../models/User";
/* 9. controller
: the logic of what should happen and not happen.
usually there will be controllers at each of module in projects
functions to handling datas */

/* 주의 !
유튜브 클론은 프론트엔드와 백엔드 개념을 따로 나누지 않는다.
response로 json data만 보내주면 되는게 아니라, render까지 해야 하는 상황.
따라서 res.render로 특정 template html을 보내주는 동시에, 
DB의 특정 data를 해당 template으로 일대일로 보내줘야 한다.
여기서 배울 것은, 백엔드 서버가 프론트엔드보다 우선되어야 한다는 HTTP 통신의 본질과
DB의 데이터를 어떻게 다룰지에 대한 개념 정립, 
그리고 리액트가 정말 편하다는 거다.ㅋㅋ  
그리고 나중에 진행될 authentification부분이 기대된다.  */

/* 10. view engine
how to make my html better? : use pug! 
we are using res.render, instead of res.send("blah blah")
this function gonna looking for a file named "join" of pug extension, in views folder. */
export const getJoin = (req, res) =>
  res.render("join", { pageTitle: "Joyooyoyoy" });
export const postJoin = async (req, res) => {
  /* 11-5. we are getting data, sent from the form of template !
  putting the variables in the body(:same as items in req.body), we are manipulating the real data from the front-end!  
   ? : 왜 const {body: ~ } = req 식으로 집어 넣지? 그냥 req.body.name식으로 하면 될텐데.*/
  const {
    body: { name, email, password, password2 },
  } = req;

  /* 12. how can I change the user logic of the page by password or id ?
  : if conditional, res.status and redirect !
  status 400 : not good access to the next step or page
  redirect to home : automatically move to the route named home*/
  if (password !== password2) {
    res.status(400);
    res.render("join", { pageTitle: "Join" });
  } else {
    try {
      /* error : .create -> [UserExistsError]: A user with the given username is already registered  */
      const user = await User({
        name,
        email,
      });
      // await User.register(user, password);
      res.redirect(routes.home);
    } catch (error) {
      console.log(error);
    }
    /* .register(user, password, cb) : Convenience method to register a new user 
instance with a given password. Checks if username is unique. */
  }
};
// different two functions. similar logic as the join page.
export const getLogin = (req, res) =>
  res.render("login", { pageTitle: "Logging In" });
// ? router에서 post방식으로 되어있는데 이건 왜 res이지? post라고 해서 꼭 req는 아닌건가?
export const postLogin = (req, res) => {
  res.redirect(routes.home);
};

export const logout = (req, res) => {
  // to do : process log out
  // res.render("logout", { pageTitle: "Logging out" });
  res.redirect(routes.home);
};
export const users = (req, res) => res.render("users", { pageTitle: "Users" });
export const userDetail = (req, res) =>
  res.render("user-detail", { pageTitle: "User Detail" });
export const userEdit = (req, res) =>
  res.render("user-profile", { pageTitle: "User Profile" });
export const userPassword = (req, res) =>
  res.render("user-password", { pageTitle: "Change Password" });
