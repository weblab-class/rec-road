const mongoose = require("mongoose");

//define a story schema for the database
const StoryIndexSchema = new mongoose.Schema({
  all_course_id: [String],
  all_course_index: [Number]
});

// compile model from schema
module.exports = mongoose.model("story", StorySchema);