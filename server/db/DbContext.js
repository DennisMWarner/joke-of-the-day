import ValueSchema from "../models/Value";
import JokeSchema from "../models/Joke";
import VoteSchema from "../models/Vote";
import mongoose from "mongoose";

class DbContext {
  Values = mongoose.model("Value", ValueSchema);
  Jokes = mongoose.model("Joke", JokeSchema);
  Votes = mongoose.model("Vote", VoteSchema);
}

export const dbContext = new DbContext();
