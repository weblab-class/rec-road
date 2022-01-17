const mongoose = require("mongoose");

const UserScoreSchema = new mongoose.Schema({
  userName: String,
  allScores: [Number]
});

// compile model from schema
module.exports = mongoose.model("userScores", UserScoreSchema);