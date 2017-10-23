'use strict'

// release 0
class MangoTree {

  // Initialize a new MangoTree
  constructor(age, height, fruits, health) {
    this._name = 'MangoTree';
    this._age = age;
    this._height = height;
    this._maxFruit = Math.ceil(Math.random() * 25);
    this._fruits = fruits;
    this._health = health;
    this._mature = false;
    this._addHeight = Math.round((Math.random() * (5 - 1)) + 10) / 10;
    this.mature = 4;
    this.maxAge = 20;
    this.maxGrow = 15;
    this.maxHeight = 6.50;
  }

  getAge() {
    return this._age;
  }

  getHeight() {
    if (this._height < this.maxHeight)
    return this._height.toFixed(2);
    else {
      return this.maxHeight.toFixed(2);
    }
  }

  getFruits() {
    return this._fruits;
  }

  healtyStatus() {
    return this._health;
  }

  // Get current states here

  // Grow the tree
  grow() {
    this._age += 1;
    if (this._age === this.maxAge)
    this._health = false;

    if (this._age === this.mature)
    this._mature = true;

    this._height += this._addHeight;

    if (this._age >= this.mature || this._age <= this.maxAge)
    this._fruits = this._maxFruit;

  }

  // Produce some mangoes
  produceMangoes() {
    return this._fruits;
  }

  // Get some fruits
  harvest() {
    let total = Math.floor(Math.random() * this._fruits);
    this.total = total;
    let stats = Math.floor(Math.random() * this.total);
    this._bad = this.total - stats;
    this._quality = `${this.total} (${stats} ${mango.good} ${this._bad} ${mango.bad})`;
    return this._quality;
  }

}

class Mango extends MangoTree {
  // Produce a mango
  constructor() {
    super();
    this.good = 'good';
    this.bad = 'bad';
    this.maxAge = 20;
  }

}

//driver code untuk release 0
let tree = new MangoTree();
let mango = new Mango();
console.log(`The Mango tree is alive! :smile:`);
let mangoTree = new MangoTree(0, 0, 20, true);
do {
  mangoTree.grow();
  mangoTree.produceMangoes();
  mangoTree.harvest();
  console.log(`[Year ${mangoTree.getAge()} Report] Height = ${mangoTree.getHeight()} | Fruits harvested = ${mangoTree.harvest()}`);
} while (mangoTree.healtyStatus() != false);
console.log(`The tree has met its end. :sad:`);

// Release 1
class AppleTree {
  constructor(age, height, fruits, health) {
    this._name = 'AppleTree';
    this._age = age;
    this._height = height;
    this._maxFruit = Math.ceil(Math.random() * 15);
    this._fruits = fruits;
    // this._produce = 0;
    this._health = health;
    this._mature = false;
    this._addHeight = Math.round((Math.random() * (5 - 1)) + 10) / 10;
    this.mature = 3;
    this.maxAge = 10;
    this.maxGrow = 10;
    this.maxHeight = 5.00;
  }

  getAge() {
    return this._age;
  }

  getHeight() {
    if (this._height < this.maxHeight)
    return this._height.toFixed(2);
    else {
      return this.maxHeight.toFixed(2);
    }
  }

  getFruits() {
    return this._fruits;
  }

  healtyStatus() {
    return this._health;
  }

  // Get current states here

  // Grow the tree
  grow() {
    this._age += 1;
    if (this._age === this.maxAge)
    this._health = false;

    if (this._age === this.mature)
    this._mature = true;

    this._height += this._addHeight;

    if (this._age >= this.mature || this._age <= this.maxAge)
    this._fruits = this._maxFruit;

  }

  // Produce some apple
  produceApples() {
    return this._fruits;
  }

  // Get some fruits
  harvest() {
    let total = Math.floor(Math.random() * this._fruits);
    this.total = total;
    let stats = Math.floor(Math.random() * this.total);
    this._bad = this.total - stats;
    this._quality = `${this.total} (${stats} ${apple.good} ${this._bad} ${apple.bad})`;
    return this._quality;
  }

}

class Apple extends AppleTree {
  constructor() {
    super();
    this.good = 'good';
    this.bad = 'bad';
    this.maxAge = 10;
  }
}

// test code untuk release 1
let apple = new Apple();
console.log('=====================================');
console.log(`The Apple tree is alive! :smile:`);
let appleTree = new AppleTree(0, 0, 10, true);
do {
  appleTree.grow();
  appleTree.produceApples();
  appleTree.harvest();
  console.log(`[Year ${appleTree.getAge()} Report] Height = ${appleTree.getHeight()} | Fruits harvested = ${appleTree.harvest()}`);
} while (appleTree.healtyStatus() != false);
console.log(`The tree has met its end. :sad:`);

// Release 2
class FruitTree {
  constructor(age, maxAge, height, addHeight, maxHeight, mature, produce, fruits) {
    this.age = 0;
    this.maxAge = maxAge;
    this.height = 0;
    this.addHeight = addHeight;
    this.maxHeight = maxHeight;
    this.mature = mature;
    this.produce = produce;
    this.fruits = fruits;
  }
}

class Mangga extends FruitTree {
  constructor() {
    super();
    this.maxAge = 20;
    this.addHeight = 1.5;
    this.maxHeight = 6.50;
    this.mature = 3;
    this.produce = 15;
    this.fruits = 'mangga';
  }
}

class Apel extends FruitTree {
  constructor() {
    super();
    this.maxAge = 10;
    this.addHeight = 1.20;
    this.maxHeight = 5.00;
    this.mature = 1;
    this.produce = 10;
    this.fruits = 'apel';
  }
}

class PearTree {
  constructor(age, height, fruits, health) {
    this._name = 'PearTree';
    this._age = age;
    this._height = height;
    this._maxFruit = Math.ceil(Math.random() * 15);
    this._fruits = fruits;
    this._produce = 0;
    this._health = health;
    this._mature = false;
    this._addHeight = Math.round((Math.random() * (5 - 1)) + 10) / 10;
    this.mature = 3;
    this.maxAge = 15;
    this.maxGrow = 15;
    this.maxHeight = 6.00;
  }

  getAge() {
    return this._age;
  }

  getHeight() {
    if (this._height < this.maxHeight)
    return this._height.toFixed(2);
    else {
      return this.maxHeight.toFixed(2);
    }
  }

  getFruits() {
    return this._fruits;
  }

  healtyStatus() {
    return this._health;
  }

  // Get current states here

  // Grow the tree
  grow() {
    this._age += 1;
    if (this._age === this.maxAge)
    this._health = false;

    if (this._age === this.mature)
    this._mature = true;

    this._height += this._addHeight;

    if (this._age >= this.mature || this._age <= this.maxAge)
    this._fruits = this._maxFruit;

  }

  // Produce some pear
  producePears() {
    return this._fruits;
  }

  // Get some fruits
  harvest() {
    let total = Math.floor(Math.random() * this._fruits);
    this.total = total;
    let stats = Math.floor(Math.random() * this.total);
    this._bad = this.total - stats;
    this._quality = `${this.total} (${stats} ${pear.good} ${this._bad} ${pear.bad})`;
    return this._quality;
  }

}

class Pear extends PearTree {
  constructor() {
    super();
    this.good = 'good';
    this.bad = 'bad';
    this.maxAge = 10;
  }
}

//test code release 2
// let mangga = new Mangga();
// let apel = new Apel();
// console.log(mangga);
// console.log(apel);
let pear = new Pear();
console.log('=====================================');
console.log(`The Pear tree is alive! :smile:`);
let pearTree = new PearTree(0, 0, 15, true);
do {
  pearTree.grow();
  pearTree.producePears();
  pearTree.harvest();
  console.log(`[Year ${pearTree.getAge()} Report] Height = ${pearTree.getHeight()} | Fruits harvested = ${pearTree.harvest()}`);
} while (pearTree.healtyStatus() != false);
console.log(`The tree has met its end. :sad:`);

// Release 3
class TreeGrove {
  constructor() {
    this._trees = [];
  }

  inputTree(tree, age, height, fruits, health) {
    if (tree === 'AppleTree') {
      let pohon = new AppleTree(age, height, fruits, health);
      this._trees.push(pohon);
    } else if (tree === 'PearTree') {
      let pohon = new PearTree(age, height, fruits, health);
      this._trees.push(pohon);
    } else if (tree === 'MangoTree') {
      let pohon = new MangoTree(age, height, fruits, health);
      this._trees.push(pohon);
    } else {
      console.log('tree not defined yet');
    }
  }

  showAge() {
    for (let i = 0; i < this._trees.length; i++) {
      console.log(this._trees[i]._name + ' sudah berumur ' + this._trees[i]._age);
    }
  }

  showTrees() {
    for (let i = 0; i < this._trees.length; i++) {
      console.log(this._trees[i]);
    }
  }

  mature_trees() {
    for (let i = 0; i < this._trees.length; i++) {
      if (this._trees[i]._age >= this._trees[i].mature) {
        console.log(this._trees[i]._name + ' sudah bisa berbuah');
      } else {
        console.log(this._trees[i]._name + ' belum bisa berbuah');
      }
    }
  }

  dead_trees() {
    for (let i = 0; i < this._trees.length; i++) {
      if (this._trees[i]._health === false)
        console.log(this._trees[i]._name + ' sudah mati');
    }
  }
}

let grove = new TreeGrove();
grove.inputTree('MangoTree', 3, 4.5, 5, true);
grove.inputTree('PearTree', 7, 4.2, 15, true);
grove.inputTree('AppleTree', 4, 6.8, 10, true);
grove.inputTree('AppleTree', 11, 6.8, 10, false);
console.log('----------AGE------------');
grove.showAge();
grove.showTrees();
grove.mature_trees();
console.log('----------DEAD TREE------------');
grove.dead_trees();
