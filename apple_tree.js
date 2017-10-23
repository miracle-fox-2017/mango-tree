"use strict"

// release 1
const FruitTree = require('./fruit_tree');

class AppleTree extends FruitTree{
	constructor() {
    super();
  }

  getFruits() {
    if (this._age <= 1) {
      this.jumlahBuah = 0;
    } else if (this._age > 1 && this._age <= 2) {
      this.jumlahBuah = (Math.floor(Math.random() * 50) + 1);
    } else if (this._age > 2 && this._age <= 5) {
      this.jumlahBuah = (Math.floor(Math.random() * 150) + 1);
    } else if (this._age > 5 && this._age <= 6) {
      this.jumlahBuah = (Math.floor(Math.random() * 30) + 1);
    } else if (this._age > 7) {
      this.jumlahBuah = 0;
    }
  }

  getHealtyStatus() {
    if (this._age > 7) {
      this.healthyStatus = false;
    }
  }
}

class Apple {
	// Produce a apple
  constructor() {
    this.kualitas = kualitas;
  }
}

// driver code untuk release 1
let appleTree = new AppleTree();
do {
  appleTree.grow();
  appleTree.produceFruits();
  appleTree.harvest();
  console.log(`[Year ${appleTree._age} Report] Height = ${appleTree._height.toFixed(1)}m | Fruits harvested = ${appleTree._harvested}`)
  } while (appleTree.healthyStatus != false)
