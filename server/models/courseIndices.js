const mongoose = require("mongoose");

const CourseIndexSchema = new mongoose.Schema({
  all_course_id: [String],
});

// compile model from schema
module.exports = mongoose.model("courseIndices", CourseIndexSchema);