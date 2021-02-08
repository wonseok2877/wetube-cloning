import mongoose from "mongoose";
import passportLocalMongoose from "passport-local-mongoose";

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  /* 유저가 다른 사이트 계정으로 로그인하면, 그 사이트 ID를 저장하려는 것.
    그래서 나중에는 모든 사이트 계정을 하나의 사용자로 묶어줄 수 있게 됨.
    통합
    fileUrl과 같은 방식으로 Url을 갖게 될 것임. */
  avatarUrl: String,
  facebookId: Number,
  githubId: Number,
});

/* .plugin() : ? 해당 스키마에 대한 플러그인을 등록해놓는 함수라고는 하는데 설명 필요
passport-local-mongoose: 비밀번호 설정, 비밀번호 확인 등등의 것들을 자동으로 해줌.
이제 얘는 configuration object(설정 객체)가 필요함 
어떤 field를 유저 이름으로 할 건지 정해야지.
이 겨우엔 email*/
UserSchema.plugin(passportLocalMongoose, { usernameField: "email" });

const model = mongoose.model("User", UserSchema);

export default model;
