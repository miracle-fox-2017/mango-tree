'use strict'

class FruitTree {

  constructor(name, age, height, fruits, health) {
    this._name = name;
    this._age = age;
    this._height = height;
    this._maxFruit = 0;
    this._fruits = fruits;
    this._harvested = '';
    this._health = health;
    this._mature = false;
    this.maxAge = 0;
    this.maxGrow = 0;
    this.maxHeight = 0;
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
    return this._harvested;
  }

  healtyStatus() {
    return this._health;
  }

  // Get current states here

  // Grow the tree
  grow() {
    let randomHeight = Math.random();
    this._age += 1;
    if (this._age === this.maxAge)
    this._health = false;

    if (this._age === this.mature)
    this._mature = true;

    if (this._height < this.maxHeight - 0.5)
    this._height += randomHeight;

    if (this._age >= this.mature || this._age <= this.maxAge)
    this._fruits = this._maxFruit;

  }

  // Produce some mangoes
  produceFruit() {
    return this._fruits;
  }

  // Get some fruits
  harvest() {
    if (this._age >= this.mature) {
      let total = Math.floor(Math.random() * 10);
      this.total = total;
      this._good = Math.floor(Math.random() * this.total);
      this._bad = this.total - this._good;
      this._harvested = `${this.total} (${this._good} ${fruit.good} ${this._bad} ${fruit.bad})`;
      return this._harvested;
    } else {
      this._harvested = `${0} (${0} ${fruit.good} ${0} ${fruit.bad})`;
      return this._harvested;
    }

  }

}

class MangoTree extends FruitTree {
  constructor(name, age, height, fruits, health) {
    super(name, age, height, fruits, health);
    this.mature = 4;
    this.maxAge = 20;
    this.maxHeight = 9.50;
  }
}

class Fruit {
  constructor() {
    this.bad = ' bad';
    this.good = ' good';
  }
}

class Mango extends Fruit {
  // Produce a mango
  constructor() {
    super();
  }

}

let mangoTree = new MangoTree('MangoTree', 0, 1.5, 5, true);
let fruit = new Fruit();
console.log(`The Mango tree is alive! :smile:`);

do {
  mangoTree.grow();
  mangoTree.produceFruit();
  mangoTree.harvest();
  console.log(`[Year ${mangoTree._age} Report] Height = ${mangoTree._height.toFixed(2)} | Fruits harvested = ${mangoTree._harvested}`);
} while (mangoTree._health != false);
console.log(`The tree has met its end. :sad:`);

// Release 1
class AppleTree extends FruitTree {
  constructor(name, age, height, fruits, health) {
    super(name, age, height, fruits, health);
    this.mature = 2;
    this.maxAge = 10;
    this.maxHeight = 7.50;
  }
}

class Apple extends Fruit {
  constructor() {
    super();
  }
}

// test code untuk release 1
console.log('=====================================');
console.log(`The Apple tree is alive! :smile:`);
let appleTree = new AppleTree('AppleTree', 0, 1, 2, true);
do {
  appleTree.grow();
  appleTree.produceFruit();
  appleTree.harvest();
  console.log(`[Year ${appleTree._age} Report] Height = ${appleTree._height.toFixed(2)} | Fruits harvested = ${appleTree._harvested}`);
} while (appleTree._health != false);
console.log(`The tree has met its end. :sad:`);


// Release 2
class PearTree extends FruitTree {
  constructor(name, age, height, fruits, health) {
    super(name, age, height, fruits, health);
    this.mature = 5;
    this.maxAge = 15;
    this.maxHeight = 5.50;
  }
}

class Pear extends Fruit {
  constructor() {
    super();
  }
}

// //test code release 2

console.log('=====================================');
console.log(`The Pear tree is alive! :smile:`);
let pearTree = new PearTree('PearTree', 0, 0, 15, true);
do {
  pearTree.grow();
  pearTree.produceFruit();
  pearTree.harvest();
  console.log(`[Year ${pearTree._age} Report] Height = ${pearTree._height.toFixed(2)} | Fruits harvested = ${pearTree._harvested}`);
} while (pearTree._health != false);
console.log(`The tree has met its end. :sad:`);

// Release 3
class TreeGrove {
  constructor() {
    this._trees = [];
  }

  inputTree(tree, age, height, fruits, health) {
    if (tree === 'AppleTree') {
      let pohon = new AppleTree(tree, age, height, fruits, health);
      this._trees.push(pohon);
    } else if (tree === 'PearTree') {
      let pohon = new PearTree(tree, age, height, fruits, health);
      this._trees.push(pohon);
    } else if (tree === 'MangoTree') {
      let pohon = new MangoTree(tree, age, height, fruits, health);
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

  nextYear() {
    for(let i = 0; i < this._trees.length; i++) {
      this._trees[i].grow();
      this._trees[i].produceFruit();
      this._trees[i].harvest();
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
      } else if (this._trees[i]._age < this._trees[i].mature) {
        console.log(this._trees[i]._name + ' belum bisa berbuah');
      } else if (this._trees[i]._age > this._trees[i].maxAge) {
        console.log(this._trees[i]._name + ' tidak bisa berbuah lagi');

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
grove.inputTree('AppleTree', 7, 6.8, 10, true);
console.log('----------AGE------------');
grove.showAge();
grove.nextYear();
grove.nextYear();
console.log('----------2 Tahun Kemudian------------');
grove.showAge();
grove.showTrees();
grove.mature_trees();

console.log('----------DEAD TREE------------');
grove.dead_trees();
