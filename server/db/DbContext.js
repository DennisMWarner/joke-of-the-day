import ValueSchema from "../models/Value";
import CommentSchema from "../models/Comment";
import JokeSchema from "../models/Joke";
import VoteSchema from "../models/Vote";
import UserSchema from "../models/User";
<<<<<<< HEAD
import TagSchema from "../models/Tag";
=======
import CommentSchema from "../models/Comment";
>>>>>>> b5353a3af10a5fa1df163a7217cb057fdd893e86
import mongoose from "mongoose";

class DbContext {
  Values = mongoose.model("Value", ValueSchema);
  Comments = mongoose.model("Comment", CommentSchema);
  Jokes = mongoose.model("Joke", JokeSchema);
  Votes = mongoose.model("Vote", VoteSchema);
<<<<<<< HEAD
  Users = mongoose.model("User", VoteSchema);
  Tag = mongoose.model("Tag", VoteSchema);
=======
  User = mongoose.model("User", VoteSchema);
  Comment = mongoose.model("Comment", CommentSchema);
>>>>>>> b5353a3af10a5fa1df163a7217cb057fdd893e86
}

export const dbContext = new DbContext();
