const mongoose = require("mongoose");

const UserScoreSchema = new mongoose.Schema({
  name: String,
  googleid: String,
});

// compile model from schema
module.exports = mongoose.model("userScores", UserScoreSchema);