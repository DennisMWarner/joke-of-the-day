export default class Joke {
  constructor(data) {
    this.id = data.data.id;
    this.imgUrl = data.data.url;
  }
  get Template() {
    return /*html*/ `<div class="col-3 p-0 trending-img">
  <img class="img-fluid" src="${this.imgUrl}" />
</div>`;
  }
}
