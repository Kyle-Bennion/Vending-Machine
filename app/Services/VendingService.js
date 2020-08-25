import Value from "../Models/Value.js";
import STORE from "../store.js";

//Public
class VendingService {

  addMethod() {
    let sum = STORE.State.vendingMachine
    sum.total += .25
    console.log(sum.total);
  }


  buyItem(string) {
    let choice = STORE.State.vendingMachine.items
    let vendTotal = STORE.State.vendingMachine
    let item = choice.find(c => c.name == string)
    if (vendTotal.total >= item.price) {
      vendTotal.total -= item.price
      console.log(item.name)
    }

  }




  dispenseItem() {

  }

}

const SERVICE = new VendingService();
export default SERVICE;
