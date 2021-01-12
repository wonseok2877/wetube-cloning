/* 9. controller
: the logic of what should happen and not happen.
usually there will be controllers at each of module in projects
functions to handling datas */
export const join = (req, res) => res.send("Join");
export const login = (req, res) => res.send("Login");
export const logout = (req, res) => res.send("Logout");

export const users = (req, res) => res.send("Users home");
export const userDetail = (req, res) => res.send("User detail");
export const userEdit = (req, res) => res.send("User profile");
export const userPassword = (req, res) => res.send("Users password");
