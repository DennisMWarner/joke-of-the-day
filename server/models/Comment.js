
import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId

const Comment = new Schema(
  {

    description: { type: String, required: true },
    tags: [{ type: ObjectId, ref: "Tag" }]
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Comment;