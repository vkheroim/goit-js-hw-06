class Storage {
  #items; //private array

  constructor(startArray) {
    this.#items = startArray;
  }

  getItems() {
    return this.#items;
  }

  addItem(newItem) {
    this.#items.push(newItem);
  }

  // removeItem(itemToRemove) {
  //   let index = this.#items.indexOf(itemToRemove);

  //   if (index === -1) {
  //     return console.log("Item not found");
  //   }

  //   this.#items.splice(index, 1);

  //   return this.#items;
  // }
  removeItem(itemToRemove) {
    this.#items = this.#items.filter((item) => item !== itemToRemove);
  }
}

const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
