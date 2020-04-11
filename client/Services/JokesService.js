import store from "../store.js";
import Joke from "../Models/Joke.js";

let _jokeApi = axios.create({
  baseURL: "https://api.jokes.one/jod",
  timeout: 3000,
});
class JokesService {
  async getAllJokes() {
    try {
      let jokes = await _jokeApi.get();
      console.log(jokes);
      jokes = new Joke(jokes);
      store.commit("jokes", jokes);
    } catch (err) {
      console.log(err);
    }
  }
}

const jokesService = new JokesService();
export default jokesService;
