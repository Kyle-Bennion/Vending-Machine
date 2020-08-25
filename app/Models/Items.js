export default class Item {
  constructor(name, img, uid, price = 0) {
    this.name = name
    this.img = img
    this.price = price
    this.uid = uid;
  }

  get Template() {
    return `<button type="button" class="btn btn-primary " onClick="app.vendingController.buy('${this.name}')" >Buy ${this.name}  ${this.price}</button>`

  }




}
