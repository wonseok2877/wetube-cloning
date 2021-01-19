import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema({
  text: {
    type: String,
    required: "Text is required~",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  video: {
    // hey, go grap me the video which has id of 1 ~
    type: mongoose.Schema.Types.ObjectId,
    // 어떤 object id가 어디서 온건지를 알려줘야겠지. 어느 model에서 온건지 동일한 이름을 넣어야 함. 여가선 Video.js
    ref: "Video",
  },
});

const model = mongoose.model("Comment", CommentSchema);
export default model;
