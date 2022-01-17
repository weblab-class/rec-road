const mongoose = require("mongoose");

const DefaultScoreSchema = new mongoose.Schema({
  all_scores: [Number]
});

// compile model from schema
module.exports = mongoose.model("defaultScores", DefaultScoreSchema);