const mongoose = require("mongoose");

//define a story schema for the database
const SavedCourseSchema = new mongoose.Schema({
  user_id: String,
  course_id: String,
  course_name: String,
  description: String,
  hours: Number,
  credits: Number,
  eval: Number
});

// compile model from schema
module.exports = mongoose.model("savedcourse", SavedCourseSchema);