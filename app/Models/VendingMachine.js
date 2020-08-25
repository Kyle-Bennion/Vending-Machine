import Item from "./Items.js";

export default class VendingMachine {
  /**
   * 
   * @param {String} name 
   */

  constructor(name) {
    this.name = name;
    this.total = 0
    this.items = [new Item('Rockstar', '//placehold.it/200x200', 98465198, 2.50), new Item('Lays Chips', '//placehold.it/200x200', 984986465, 0.75)]

  }


  get Template() {
    return this.name
  }




}
