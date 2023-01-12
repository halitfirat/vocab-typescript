import mongoose from "mongoose";

const { Schema } = mongoose;
const vocabSchema = new Schema({
  native: String,
  foreign: String,
});

mongoose.model("vocab", vocabSchema);
