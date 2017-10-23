"use strict"

// release 0

class MangoTree {

  // Initialize a new MangoTree
  constructor() {
    this._age = 0;
    this._max = Math.floor((Math.random() * 5)+1)*5;
    this._height = 0;
    this._maxheight = 5;
    this._fruit = 0;
    this._harvested = 0;
    this.healthyStatus = true;
    this.bad = 0;
    this.good = 0;
  }

  getAge() {
    if (this._age === this._max) {
      this.healthyStatus = false;
    }
    this._age++;    
  }
  getHeight() {
    if (this._height < this._maxheight) {
      this._height += Math.random();
    } else {
      this._height = 5;
    }
  }
  getFruits() {
    this._fruit = Math.floor(Math.random() * 10) + 1;
  }
  getHealtyStatus() {
    this.healthyStatus;
  }


  // Get current states here

  // Grow the tree
  grow() {
    this.getAge()
    this.getHeight();
  }

  // Produce some mangoes
  produceMangoes() {
    if (this._age >= 2) {
      this.getFruits();
    }
  }

  // Get some fruits
  harverst() {
    this.bad = Math.floor(Math.random() * this._fruit);
    this.good = this._fruit - this.bad;
  }

}

class Mango {
  // Produce a mango
  constructor() {
  }
}

/**
  * driver code untuk release 0
**/
let mangoTree = new MangoTree()
do {
mangoTree.grow();
mangoTree.produceMangoes();
mangoTree.harverst();
  console.log(`[Year ${mangoTree._age} Report] Height = ${Number(mangoTree._height.toFixed(2))} m | Fruits harvested = ${mangoTree._fruit} | good : ${mangoTree.good} | good : ${mangoTree.bad}`)
} while (mangoTree.healthyStatus != false)
console.log();
// // Release 1
// class AppleTree {}
// class Apple {}

// // Release 2
// class FruitTree {}
// class Fruit {}

// // Release 3
// class TreeGrove {}
