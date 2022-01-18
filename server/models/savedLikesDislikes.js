const mongoose = require("mongoose");

// 1.0 for like, 0.0 for dislike, 0.5 for neutral
const CourseLikeDislikeSchema = new mongoose.Schema({
  course_id: String,
  user_id: String,
  course_like_neutral_dislike: Number
});

// compile model from schema
module.exports = mongoose.model("courselikedislike", CourseLikeDislikeSchema);