import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Joke = new Schema(
  {
    author: { type: String, required: true },
    theJoke: { type: String, required: true },
    description: { type: String, default: "Keep it clean" }
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Joke;