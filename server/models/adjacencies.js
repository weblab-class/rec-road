const mongoose = require("mongoose");

//define a story schema for the database
const AdjacencySchema = new mongoose.Schema({
  course_id: String,
  course_adjacencies: [String],
});

// compile model from schema
module.exports = mongoose.model("adjacencies", AdjacencySchema);