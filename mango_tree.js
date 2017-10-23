"use strict"

// release 0

class MangoTree {

  // Initialize a new MangoTree
  constructor(age = 0, height = 0, maxAge = 10, heightGrowth = getRandomIntInclusive(10,20), fruitName) {
    this._age = age;
    this._height = height;
    this._pickedFruitCount = [];
    this._harvested = '';
    this.healthyStatus = true;
    this._heightGrowth = heightGrowth;
    this._fruitName = fruitName;
    this._maxAge = maxAge;
  }


  getAge() {
    return this._age;
  }

  getHeight() {
    return this._height;
  }

  getHealtyStatus() {
  
    return this.healthyStatus;
  }


  // Get current states here

  // Grow the tree
  grow() {
    this._age +=  1;
    this._height += this._heightGrowth;

    if (this._age === this._maxAge) {
      this.healthyStatus = false;
    }
  }

  // Produce some mangoes
  produceMangoes() {
    let fruitProduced = getRandomIntInclusive(1,5);
    let arrFruitProduced = [];

    for (var i = 0; i < fruitProduced; i++) {
      let quality = getRandomIntInclusive(0,1);
      arrFruitProduced.push(new Mango(quality));
    }

    this._pickedFruitCount = arrFruitProduced;
  }

  // Get some fruits
  harvest() {
    let harvestedManggo = JSON.parse(JSON.stringify(this._pickedFruitCount));
    let goodCount = 0;
    let badCount = 0;

    for (let i = 0; i < harvestedManggo.length; i++){
      if (harvestedManggo[i].fruitQuality == 0) {
        goodCount +=1;
      } else if (harvestedManggo[i].fruitQuality == 1) {
        badCount += 1;
      }
    }

    this._harvested =  `${harvestedManggo.length}  (${goodCount} good, ${badCount} bad)`;
  }

}

class Mango {
  // Produce a mango
  constructor(fruitQuality) {
    this.fruitQuality = fruitQuality;
  }
}

let maxAge = getRandomIntInclusive(10, 15);
let mangoTree = new MangoTree(0, 0, maxAge, getRandomIntInclusive(10, 15), 'Mangga Arumanis');

// do {
//   mangoTree.grow();
//   mangoTree.produceMangoes();
//   mangoTree.harvest();

//   console.log(`[Year ${mangoTree._age} Report] Height = ${mangoTree._height} cm | Fruits harvested = ${mangoTree._harvested}`)

//   if (mangoTree.healthyStatus == false) {
//     console.log(`The ${mangoTree._fruitName} tree has met its end. :sad:`);
//     // break;
//   } 
// } while (mangoTree.healthyStatus != false)

/**
  * driver code untuk release 0
  * let mangoTree = new MangoTree()
  * do {
  *   mangoTree.grow();
  *   mangoTree.produceMangoes();
  *   mangoTree.harvest();
  *   console.log(`[Year ${mangoTree._age} Report] Height = ${mangoTree._height} | Fruits harvested = ${mangoTree._harvested}`)
  * } while (mangoTree.healthyStatus != false)
  */

// Release 1
class AppleTree extends MangoTree {
  constructor(age, height, maxAge, heightGrowth, fruitName) {
    super(age, height, maxAge, heightGrowth, fruitName);
  }
}

class Apple extends Mango{}

let maxApleAge = getRandomIntInclusive(8, 10);
let appleTree = new AppleTree(0, 0, maxApleAge, getRandomIntInclusive(1, 3), 'Apel Lembang');

do {
  appleTree.grow();
  appleTree.produceMangoes();
  appleTree.harvest();

  console.log(`[Year ${appleTree._age} Report] Height = ${appleTree._height} cm | Fruits harvested = ${appleTree._harvested}`)

  if (appleTree.healthyStatus == false) {
    console.log(`The ${appleTree._fruitName} tree has met its end. :sad:`);
    // break;
  } 
} while (appleTree.healthyStatus != false)


// Release 2
class FruitTree {
  // age = 0, height = 0, maxAge = 10, heightGrowth = getRandomIntInclusive(10,20), fruitName
  constructor(heightGainYearly, maxAge, ageBloom, yearlyProduction) {
    this._age = 0;
    this._height = 0;
    this._maxAge = maxAge;
    this._ageBloom = ageBloom;
    this._yearlyProduction = yearlyProduction;
    this._healthyStatus = true;
    this._fruitProduced = [];
  }

  getAge() {
    return this._age;
  }

  getHeight() {
    return this._height;
  }

  getHealtyStatus() {
    return this._healthyStatus;
  }


  // Get current states here

  // Grow the tree
  grow() {
    this._age +=  1;
    this._height += this._heightGrowth;

    if (this._age === this._maxAge) {
      tthis._healthyStatus = false;
    }
  }

  // Produce some mangoes
  produceFruits() {
    let fruitProduced = getRandomIntInclusive(1,5);
    let arrFruitProduced = [];

    for (var i = 0; i < fruitProduced; i++) {
      let quality = getRandomIntInclusive(0,1);
      arrFruitProduced.push(new Fruit(quality));
    }

    this._fruitProduced = arrFruitProduced;
  }

  // Get some fruits
  harvest() {
    let harvestedManggo = JSON.parse(JSON.stringify(this._fruitProduced));
    let goodCount = 0;
    let badCount = 0;

    for (let i = 0; i < harvestedManggo.length; i++){
      if (harvestedManggo[i].fruitQuality == 0) {
        goodCount +=1;
      } else if (harvestedManggo[i].fruitQuality == 1) {
        badCount += 1;
      }
    }

    this._harvested =  `${harvestedManggo.length}  (${goodCount} good, ${badCount} bad)`;
  }
}

class Fruit {
  constructor(fruitQuality) {
    this.fruitQuality = fruitQuality;
  }
}

let fruitTree = new FruitTree(1, 15, 5, 5);

// do {
//   fruitTree.grow();
//   fruitTree.produceMangoes();
//   fruitTree.harvest();

//   console.log(`[Year ${fruitTree._age} Report] Height = ${fruitTree._height} cm | Fruits harvested = ${fruitTree._harvested}`)

//   if (fruitTree.healthyStatus == false) {
//     console.log(`The ${fruitTree._fruitName} tree has met its end. :sad:`);
//     // break;
//   } 
// } while (fruitTree.healthyStatus != false)

// Release 3
class TreeGrove {}



function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}