import JokesService from "../Services/JokesService.js";
import store from "../store.js";

//Private
function _draw() {
  let jokes = store.State.jokes;
  console.log(jokes);
}

//Public
export default class JokesController {
  constructor() {
    store.subscribe("jokes", _draw);
  }

  getAllJokes () {
    JokesService.getAllJokes()
  }
}
