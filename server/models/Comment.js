
import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId

const Comment = new Schema(
  {
    joke: { type: ObjectId, ref: "Joke", required: true },
    user: { type: ObjectId, ref: "User", required: true },
    body: { type: String, required: true },
    tags: [{ type: ObjectId, ref: "Tag" }]
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Comment;