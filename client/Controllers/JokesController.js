import JokesService from "../Services/JokesService.js";
import store from "../store.js";

//Private
function _draw() {
  let jokes = store.State.jokes;
  let template = "";

  store.State.jokes.forEach((joke) => (template += joke.Template));
  document.getElementById("joke-area").innerHTML = template;
}

//Public
export default class JokesController {
  constructor() {
    JokesService.getAllJokes();
    store.subscribe("jokes", _draw);
  }
}
