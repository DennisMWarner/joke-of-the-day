import JokesService from "../Services/JokesService.js";
import store from "../store.js";

//Private
function _draw() {
  let jokes = store.State.jokes;
  let template = "";

  console.log("Jokes: ", jokes);
}

//Public
export default class JokesController {
  constructor() {
    JokesService.getAllJokes();
    store.subscribe("jokes", _draw);
  }
}
