import store from "../store.js";

let _jokeApi = axios.create({
  baseURL: "localhost:",
  timeout: 3000,
});
class JokesService {
  getAllJokes() {}
}

const jokesService = new JokesService();
export default jokesService;
