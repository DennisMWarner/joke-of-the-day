export default class Joke {
  constructor(data) {
      this.title = data.title
  }

  get Template() {
      return this.title
  }
}