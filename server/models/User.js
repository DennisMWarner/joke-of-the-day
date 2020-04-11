import mongoose from "mongoose";
const Schema = mongoose.Schema;

const User = new Schema(
  {
    name: { type: String, required: true },
    alias: { type: String, unique: true },
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default User;