import passport from "passport";
import User from "./models/User";

// passport에게 stategy, 즉 로그인 방식을 하나 사용하라고 말해줌
passport.use(User.createStrategy);

/* serialization : 어떤 정보를 쿠키에게 주느냐.
즉, 클라이언트 쪽의 사용자에 대해 지금 어떤 정보를 가질 수 있는가. 민감해서 보통 id만 넣는다. 
쿠키에는 오직 user.id만 담아서 보내도록 해
일반적으로 사람들은 쿠키에 user.id를 담고, 그 id로 사용자를 식별해.
*/
passport.serializeUser(User.serializeUser());
// deserializarion : 쿠키의 정보를 갖고 어느 사용자인지 어떻게 찾는가
passport.deserializeUser(User.deserializeUser());
