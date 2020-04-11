import store from "../store.js";
import Joke from "../Models/Joke.js"

let _jokeApi = axios.create({
  baseURL: "localhost:3000/jokes",
  timeout: 3000,
});
class JokesService {
  async getAllJokes() {
    try {let jokes = await _jokeApi.get()
      console.log(jokes)
      jokes.map(jokeRawData => new Joke(jokeRawData))
      store.commit('jokes', jokes)
    }
    catch(err) {
      console.log(err)
    }
  }
}

const jokesService = new JokesService();
export default jokesService;
