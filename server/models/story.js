const mongoose = require("mongoose");

//define a story schema for the database
const StorySchema = new mongoose.Schema({
  course_id: String,
  course_name: String,
  description: String,
  score: Number,
  hours: Number,
  credits: Number,
  eval: Number
});

// compile model from schema
module.exports = mongoose.model("story", StorySchema);