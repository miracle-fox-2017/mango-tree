"use strict"

// release 2
const FruitTree = require('../fruit_tree');
const Pear = require('./pear')

class PearTree extends FruitTree{
	// Initialize a new MangoTree
  constructor(name) {
    super(name)
  }

  produceMangoes() {
    this._fruits = []
    for(let i = 0; i < this.maxFruits; i++) {
      this._fruits.push(new Pear())
    }
    // console.log(this._fruits);
    return this._fruits
  }
}

// driver code untuk release 0
let pearTree = new PearTree('Pir')
console.log(`The ${pearTree.name} tree is alive!`);
do {
  pearTree.grow();
  pearTree.produceFruits();
  pearTree.harvest();
  console.log(`[Year ${pearTree._age} Report] Height = ${pearTree._height.toFixed(1)}m | Fruits harvested = ${pearTree._harvested}`)
} while (pearTree.healthyStatus != false)
