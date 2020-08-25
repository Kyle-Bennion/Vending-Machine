import VendingService from "../Services/VendingService.js";
import STORE from "../store.js";


function _drawButton() {
  let item = STORE.State.vendingMachine.items
  document.getElementById('items').innerHTML = item[0].Template + item[1].Template
}
function _drawRemainder() {
  let remainder = STORE.State.vendingMachine.total
  document.getElementById('Remainder').innerText = `$${remainder}`
}



//Public
export default class VendingController {
  constructor() {

    _drawButton()

  }

  addMoney() {
    VendingService.addMethod()
    _drawRemainder()

  }


  buy(str) {
    VendingService.buyItem(str)
    _drawRemainder()
  }

  drawButton() {

  }
}
