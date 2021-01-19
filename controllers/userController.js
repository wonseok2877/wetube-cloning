/* 9. controller
: the logic of what should happen and not happen.
usually there will be controllers at each of module in projects
functions to handling datas */
// export const join = (req, res) => res.send("Join");
// export const login = (req, res) => res.send("Login");
// export const logout = (req, res) => res.send("Logout");

import routes from "../routes";

// export const users = (req, res) => res.send("Users home");
// export const userDetail = (req, res) => res.send("User detail");
// export const userEdit = (req, res) => res.send("User profile");
// export const userPassword = (req, res) => res.send("Users password");

/* 10. view engine
how to make my html better? : use pug! 
we are using res.render, instead of res.send("blah blah")
this function gonna looking for a file named "join" of pug extension, in views folder. */
export const getJoin = (req, res) =>
  res.render("join", { pageTitle: "Joyooyoyoy" });
export const postJoin = (req, res) => {
  //   console.log(req.body)
  /* 11-5. we are getting data, sent from the form of template !
  putting the variables in the body(:same as items in req.body), we are manipulating the real data from the front-end!  
   ? : 왜 const {body: ~ } = req 식으로 집어 넣지? 그냥 req.body.name식으로 하면 될텐데.*/
  const {
    body: { name, email, password, password2 },
  } = req;
  //  위에거 생략 가능. if (req.body.password !== req.body.password2) 식으로

  /* 12. how can I change the user logic of the page by password or id ?
  : if conditional, res.status and redirect !
  status 400 : not good access to the next step or page
  redirect to home : automatically move to the route named home*/
  if (password !== password2) {
    res.status(400);
    res.render("join", { pageTitle: "Joyooyoyoy" });
  } else {
    //   to do : registesr user , log user in
    res.redirect(routes.home);
  }
};
// different two functions. similar logic as the join page.
export const getLogin = (req, res) =>
  res.render("login", { pageTitle: "Logging In" });
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
