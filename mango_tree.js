"use strict"

class FruitTree {
  constructor(param) {
    this._age = 0;
    this._height = 0;
    this._fruits = [];
    this._harvested = 0;
    this._healthy = true;
    this._maxAge = 20;
    this._maxFruits = 30; 
    this._fruitName = "Unknown";
    this.good = 0;
    this.bad = 0;
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

  getHealthyStatus() {
    return this._healthy;
  }

  grow() {
    this._age++;

    if (this._age < 20) {
      this._height += Math.round(random() / 12);
      return this._healthy = true;
    } else {
      return this._healthy = false;
    }
  }

  // Produce some fruits
  produceFruits() {
    let buah = random() + 30;
    let totalBuah = (buah > this._maxFruits) ? this._maxFruits : buah;

    for (let i = 0; i < totalBuah; i++) {
      let fruit = new Fruit();

      if (fruit.quality == "good") {
        this._good++;
      } else {
        this._bad++;
      }

      this._fruits.push(fruit);
    }
  }

  produceFruitsArgs(totalBuah) {
    for (let i = 0; i < totalBuah; i++) {
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

class Fruit {
  constructor() {
    this.quality = (random() % 2 == 0) ? "good" : "bad";
  }
}

function random() {
  return Math.floor(Math.random() * 20);
}

// Mangga
class MangoTree extends FruitTree {
  constructor(param) {
    super(param);
  }
}

class Mango extends Fruit{
  constructor() {
    super();
  }
}

let mangoTree = new MangoTree({fruitName: "Mango"});
console.log(`The ${mangoTree._fruitName} tree is alive! :smile:`);

do {
  mangoTree.grow();
  mangoTree.produceFruits();
  mangoTree.harvest();
  console.log(`[Year ${mangoTree._age} Report] Height = ${mangoTree._height} m | ${mangoTree._fruitName}s harvested = ${mangoTree._harvested}`);
} while (mangoTree.getHealthyStatus() != false)

console.log(`The ${mangoTree._fruitName} tree has met its end. :sad:\n`);

// Apel
class AppleTree extends FruitTree {
  constructor(param) {
    super(param);
  }
}

class Apple extends Fruit{
  constructor() {
    super();
  }
}

let appleTree = new AppleTree({fruitName: "Apple"});
console.log(`The ${appleTree._fruitName} tree is alive! :smile:`);

do {
  appleTree.grow();
  appleTree.produceFruits();
  appleTree.harvest();
  console.log(`[Year ${appleTree._age} Report] Height = ${appleTree._height} m | ${appleTree._fruitName}s harvested = ${appleTree._harvested}`);
} while (appleTree.getHealthyStatus() != false)

console.log(`The ${appleTree._fruitName} tree has met its end. :sad:\n`);

