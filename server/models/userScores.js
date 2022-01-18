const mongoose = require("mongoose");

const UserScoreSchema = new mongoose.Schema({
  user_id: String,
  all_scores: [Number]
});

// compile model from schema
module.exports = mongoose.model("userScores", UserScoreSchema);