export default class Joke {
  constructor(data) {
    this.id = data.id;
    this.joke = data.joke;
  }
  get Template() {
    return /*html*/ `
    <div class="col-3">
    <h6>${this.joke}</h6>
    </div>
    `;
  }
}
