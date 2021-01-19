import mongoose from "mongoose";

/* 15. Model : 실제 데이터
Schema : 데이터의 형태 */
const VideoSchema = new mongoose.Schema({
  // 우리는 DB에다가 video자체를 넣지는 않을거야.link. 우리의 경우엔 우리 서버에 저장하는거지.
  // 15-1. data type definitions
  fileUrl: {
    type: String,
    // require url
    required: "File URL is required",
  },
  title: {
    type: String,
    required: "title is required",
  },
  //  15-2. syntax : configuration이 필요하면 {}안에다가, 아니면 data type definition만.
  description: String,
  views: {
    type: Number,
    // views should be 0 as default
    default: 0,
  },
  createdAt: {
    type: Date,
    // function that brings current date
    default: Date.now,
  },
  //   15-3. how can we make relationship between data of two models? : ref
  comments: [
    {
      // hey, go grap me the video which has id of 1 ~ , putting only id of datas of Comment like [1,2,3,4,...]
      type: mongoose.Schema.Types.ObjectId,
      // 어떤 object id가 어디서 온건지를 알려줘야겠지. 어느 model에서 온건지 동일한 이름을 넣어야 함. 여가선 Comment.js
      ref: "Comment",
    },
  ],
});

const model = mongoose.model("Video", VideoSchema);
export default model;
