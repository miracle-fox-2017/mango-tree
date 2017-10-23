"use strict"

// release 0
const FruitTree = require('./fruit_tree');

class MangoTree extends FruitTree{
  // Initialize a new MangoTree
}

class Mango {
  // Produce a mango
  constructor() {
    this.kualitas = kualitas;
  }
}

// driver code untuk release 0
let mangoTree = new MangoTree();
do {
  mangoTree.grow();
  mangoTree.produceFruits();
  mangoTree.harvest();
  console.log(`[Year ${mangoTree._age} Report] Height = ${mangoTree._height.toFixed(1)}m | Fruits harvested = ${mangoTree._harvested}`)
  } while (mangoTree.healthyStatus != false)
