"use strict"

// release 2
const FruitTree = require('./fruit_tree');

class PearTree extends FruitTree{
	constructor() {
    super();
  }

  getFruits() {
    if (this._age <= 1) {
      this.jumlahBuah = 0;
    } else if (this._age > 1 && this._age <= 2) {
      this.jumlahBuah = (Math.floor(Math.random() * 30) + 1);
    } else if (this._age > 2 && this._age <= 5) {
      this.jumlahBuah = (Math.floor(Math.random() * 50) + 1);
    } else if (this._age > 5 && this._age <= 6) {
      this.jumlahBuah = (Math.floor(Math.random() * 150) + 1);
    } else if (this._age > 7) {
      this.jumlahBuah = 0;
    }
  }

  getHealtyStatus() {
    if (this._age > 8) {
      this.healthyStatus = false;
    }
  }
}

class Pear {
	// Produce a pear
  constructor() {
    this.kualitas = kualitas;
  }
}

// driver code untuk release 1
let pearTree = new PearTree();
do {
  pearTree.grow();
  pearTree.produceFruits();
  pearTree.harvest();
  console.log(`[Year ${pearTree._age} Report] Height = ${pearTree._height.toFixed(1)}m | Fruits harvested = ${pearTree._harvested}`)
  } while (pearTree.healthyStatus != false)
