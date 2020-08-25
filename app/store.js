import Value from "./Models/Value.js";
import VendingMachine from "./Models/VendingMachine.js";

let _state = {
  /** @type {VendingMachine} */
  vendingMachine: new VendingMachine("Vending Machine")






};

class Store {
  /**
   * Provides access to application state data
   */
  get State() {
    return _state;
  }
}

const STORE = new Store();
export default STORE;
