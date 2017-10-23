"use strict"

// release 0

class MangoTree {

  // Initialize a new MangoTree
  constructor(param) {
    this._age = 0;
    this._height = 0;
    this.fruits = [];
    this.healthy = true;

    }

  getAge() {
    return this._age;
  }

  getHeight() {
    return this._height;
  }

  getFruits() {
    return this._fruits;
  }

  getHealtyStatus() {
    return this._healthy;
  }


  // Get current states here

  // Grow the tree
  grow() {
    this._age++;
    if (this._age < 10) {
      this._height += Math.round(random() / 12);
      return this._healthy = true;
    } else {
      return this._healthy = false;
    }
  }


  // Produce some mangoes
  produceMangoes() {
    let buah = random() + 20;
    let jumlahBuah = (buah > this._maxFruits) ? this._maxFruits : buah;

    for (let i = 0; i < jumlahBuah; i++) {
      let fruit = new Fruit();

      if (fruit.quality == "good") {
        this._good++;
      } else {
        this._bad++;
      }

      this._fruits.push(fruit);
    }
  }

  // Get some fruits
  
  harvest() {
    this._harvested = `${this._fruits.length} (${this._good} good, ${this._bad} bad)`;
    this._fruits = [];
    this._bad = 0;
    this._good = 0
  }

}

class Mango {
  constructor() {
    this.quality = (random() % 2 == 0) ? "good" : "bad";
  }
  // Produce a mango
  constructor() {
  }
}

/**
  * driver code untuk release 0
  * let mangoTree = new MangoTree()
  * do {
  *   mangoTree.grow();
  *   mangoTree.produceMangoes();
  *   mangoTree.harverst();
  *   console.log(`[Year ${tree._age} Report] Height = ${tree._height} | Fruits harvested = ${tree._harvested}`)
  * } while (mangoTree.healthyStatus != false)
  */

// Release 1
class AppleTree {}
class Apple {}

// Release 2
class FruitTree {}
class Fruit {}

// Release 3
class TreeGrove {}





























