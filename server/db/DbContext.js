import ValueSchema from "../models/Value";
import JokeSchema from "../models/Joke";
import mongoose from "mongoose";

class DbContext {
  Values = mongoose.model("Value", ValueSchema);
  Jokes = mongoose.model("Joke", JokeSchema);
}

export const dbContext = new DbContext();
