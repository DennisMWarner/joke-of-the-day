import ValueSchema from "../models/Value";
import CommentSchema from "../models/Comment";
import JokeSchema from "../models/Joke";
import VoteSchema from "../models/Vote";
import UserSchema from "../models/User";
import mongoose from "mongoose";

class DbContext {
  Values = mongoose.model("Value", ValueSchema);
  Comments = mongoose.model("Comment", CommentSchema);
  Jokes = mongoose.model("Joke", JokeSchema);
  Votes = mongoose.model("Vote", VoteSchema);
  Users = mongoose.model("User", UserSchema);
}
export const dbContext = new DbContext();
