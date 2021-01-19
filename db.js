/* 14. MongoDB : database
mongoose : how to connect mongoDB with nodeJS */
import mongoose from "mongoose";
import dotenv from "dotenv";

// load the models before we use them
import "./models/Video";
import "./models/Comment";

// .env 파일 안에 있는 정보를 불러온 뒤, process.env에다가 로드할거야
dotenv.config();

// string으로된 database를 요청중. 27017은 포트 번호.
mongoose.connect(process.env.MONGO_URL, {
  // 새로운 버전의 mongoDB는 configuration을 보내줄 수 있다.
  useNewUrlParser: true,
  useFindAndModify: false,
  // prompt에서  DeprecationWarning 지랄지랄해서 일단 넣음
  useUnifiedTopology: true,
});

const db = mongoose.connection;

const handleOpen = () => console.log("connected to DB😍");
const handleError = (error) =>
  console.log(`💢 Error on DB connection : ${error}`);

// mongoose의 connection을 한 번 실행한다는 소리..? 서버를 열때랑 느낌이 비슷하누
db.once("open", handleOpen);
db.on("error", handleError);

// // fake datas
// export const videos = [
//   {
//     id: 99999,
//     title: "Video Sexy",
//     description: "This is my first understood website",
//     views: 1000,
//     videoFile:
//       "https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4",
//     creator: {
//       id: 5432,
//       name: "Wonseok",
//       email: "rahula@aaa.com",
//     },
//   },
//   {
//     id: 11111,
//     title: "Video delicious",
//     description: "This is my first understood website",
//     views: 1000,
//     videoFile: "https://archive.org/details/BigBuckBunny_124",
//     creator: {
//       id: 5432,
//       name: "Wonseok",
//       email: "rahula@aaa.com",
//     },
//   },
//   {
//     id: 22222,
//     title: "Video noice",
//     description: "This is my first understood website",
//     views: 1000,
//     videoFile: "https://archive.org/details/BigBuckBunny_124",
//     creator: {
//       id: 5432,
//       name: "Wonseok",
//       email: "rahula@aaa.com",
//     },
//   },
//   {
//     id: 33333,
//     title: "Video gorgeous",
//     description: "This is my first understood website",
//     views: 1000,
//     videoFile: "https://archive.org/details/BigBuckBunny_124",
//     creator: {
//       id: 5432,
//       name: "Wonseok",
//       email: "rahula@aaa.com",
//     },
//   },
// ];
