import store from "../store.js";
import Joke from "../Models/Joke.js";

let _jokeApi = axios.create({
  // baseURL: "https://api.jokes.one/jod",
  baseURL: "http://api.icndb.com/jokes/random/10",
  timeout: 3000,
});
class JokesService {
  async getAllJokes() {
    try {
      let jokes = await _jokeApi.get();
      let allJokes = jokes.data.value.map(
        (jokeRawData) => new Joke(jokeRawData)
      );
      store.commit("jokes", allJokes);
    } catch (err) {
      console.log(err);
    }
    console.log("Jokes in store: ", store.State.jokes);
  }
}

const jokesService = new JokesService();
export default jokesService;
