import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Vote = new Schema(
  {
    author: { type: String, required: true },
    theVote: { type: String, required: true },
    description: { type: String, default: "What is your favorite?" }
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Vote;