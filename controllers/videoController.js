import Video from "../models/Video";
import routes from "../routes";
// 10-5. in render function, 1st argument is the template and 2nd is an object of informations in individual template.
// async & await : 어떤 실행이 끝날 때 까지 기다려준다. 여기선 Video.find
export const videoHome = async (req, res) => {
  // try & catch : error 잡아내기. 디폴트로 error을 잡아내지 못하는건 nodeJS의 문제점.
  try {
    /* 15-4. how we find all the data in model ? 
    .find({}) : finds any video in database ../models/Video.
    mongoose has a lot of options to do something like this.
    If you want to query by a document's _id, use findById().
    The id is cast based on the Schema before sending the command. --- mongoosejs.com */
    // .sort : 그냥 array정렬 방식이다. 데이터 정렬의 순서를 바꿀 수 있다. 여기서 -1로 바꾸면 예전 비디오부터 정렬됨
    const videos = await Video.find({}).sort({ _id: 1 });
    // throw Error("hohohohohooo");

    /* 11. how can I get data from DB, to the template?
  : import the data from database ! in MVC pattern, we use controllers as a key function. + data*/
    res.render("home", { pageTitle: "Home", videos });
  } catch (error) {
    console.log(error);
    // if there is an error, it will return videos, as an empty arrray
    res.render("home", { pageTitle: "Home", videos: [] });
  }
};

export const videoSearch = async (req, res) => {
  //   console.log(req)  : query: { teeeerm: 'suckmyass' }
  /* `req` is an object !
  url: '/search?teeeerm=understanding',
  method: 'GET',
  search: '?teeeerm=understanding',
  query: 'teeeerm=understanding',
  pathname: '/search',
  path: '/search?teeeerm=understanding',
  query: { teeeerm: 'understanding' },
  res: <ref *3> ServerResponse { ..... }*/
  const {
    // ES6 ! same as const searchingBy = req.query.teeeerm
    query: { teeeerm: searchingBy },
    // params: { id },
  } = req;
  // let으로 하는 이유는 DB에서 받은 비디오로 reassign할것이기 때문
  let videos = [];
  try {
    /* videos=await Video.find({title: searchingBy})
    이렇게 해도 되긴 한다. 그러나 야무지게 찾으려면 mongo의 regular expression이라는 도구를 써야함 */
    videos = await Video.find({
      title: { $regex: searchingBy, $options: "i" },
    });
  } catch (error) {
    console.log(error);
  }

  res.render("search", { pageTitle: "Search", searchingBy, videos });
};

export const video = (req, res) =>
  res.render("videos", { pageTitle: "Videos" });

/* 13. more controllers
get upload & post upload 
: logics when user upload a video */
export const videoGetUpload = (req, res) =>
  res.render("video-upload", { pageTitle: "Video Upload" });

export const videoPostUpload = async (req, res) => {
  // 13-1. giving video informations to req.body
  const {
    body: { title, description },
    file: { path },
  } = req;
  /* console.log(body, file) :
  [Object: null prototype] { title: 'wow', description: 'multer !' } {
  fieldname: 'videoFile',
  originalname: 'Creatures Underwater.mp4',
  .
  .
  .
  path: 'videos/cbad4ea323de529716540bb9b0f18703'
  }*/

  /* 15-5. make uploaded video into real data !
  initializing the schema of data, just same as the names of file. */
  const newVideo = await Video.create({
    fileUrl: path,
    title,
    description,
  });
  console.log(newVideo);
  // to do : upload and save video
  res.redirect(routes.videoDetail(newVideo.id));
};

export const videoDetail = async (req, res) => {
  // console.log(req.params) :   { sexymotherfuucker: '6007ddfbc780ef2fe0f5b9d4' }
  // : if the name of id is sexymotherfuucker, it should be equal to the route "/:sexymotherfuucker" in the routes
  const {
    // route의 :id를 그대로 요청에다가 쓴다 !
    params: { id },
  } = req;

  try {
    console.log(req.params);
    // model.findById : id에 따라 data를 찾는 mongoDB 함수. id «Any» value of _id to query by
    const video = await Video.findById(id);
    console.log(video);
    // 실제 비디오 data인 video가 template로 전달된다 ! video : video.
    res.render("video-detail", { pageTitle: video.title, video });
  } catch (error) {
    /* even if the user made mistake writing url, it will catch error and prevent the shut down.
    CastError: Cast to ObjectId failed for value "6007ddfbc780ef2fe0f5b9d4a" at path "_id" for model "Video" 
    OR reason: Error: Argument passed in must be a single String of 12 bytes or a string of 24 hex characters*/
    console.log(error);
    // 유투브는 원래 있던 비디오 페이지로 되돌린다. I wanna do that.
    // ? 근데 이전의 페이지로 돌려보내든가 해야되는거 아냐? 지금은 개판이다.
    // res.render("video-detail", { pageTitle: "Video Detail" });

    res.redirect(routes.home);
  }
};

export const getVideoEdit = async (req, res) => {
  const {
    params: { id },
  } = req;
  // console.log(req.params);
  try {
    const video = await Video.findById(id);
    // console.log(video);
    res.render("video-edit", { pageTitle: `Edit ${video.title}`, video });
  } catch (error) {
    console.log(error);
    res.redirect(routes.home);
  }
};

export const postVideoEdit = async (req, res) => {
  const {
    params: { id },
    // 제목과 설명을 가져와서 바꿔야 하기 때문에 body가 필요하다
    body: { title, description },
  } = req;
  try {
    // 왜 이렇게 하냐면, 이걸 새로운 변수로 저장하고 싶지 않고 업데이트한 결과물은 별로 관심 없거든.
    /* findOneAndUpdate : 몽고DB의 함수. 
    title과 description은 model에서 정한 이름과 똑같이.
    여기서 모두 연겷되어 있어. model과 template이 같은 이름은 써야해.
    */ // _id is created automatically in mongoDB to make sure we have unique ids.
    await Video.findOneAndUpdate({ _id: id }, { title, description });
    res.redirect(routes.home);
    /* ? : 다시 이 페이지로 돌아오는 방법은 없나?
    await Promise.all([
      Video.findOneAndUpdate({ _id: id }, { title, description }),
      (video = Video.findById(id)),
    ]);*/
    // console.log(video);
    // res.redirect(routes.videoDetail(id));
    // middleware을 써서 중간에서 redirect시켜도 되긴함. 그렇게 되면 try&catch를 안써도 되는 것
  } catch (error) {
    console.log(error);
    res.redirect(routes.home);
  }
};

export const videoDelete = async (req, res) => {
  const {
    params: { id },
  } = req;
  try {
    // findOneAndRemove : collection에서 하나 골라서 없애쥰당
    await Video.findOneAndRemove({ _id: id });
  } catch (error) {
    console.log(error);
  }
  res.redirect(routes.home);
  res.render("video-delete", { pageTitle: "Video Delete" });
};
