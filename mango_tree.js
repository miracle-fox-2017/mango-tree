"use strict"

// release 0

class MangoTree {

  // Initialize a new MangoTree
  constructor(age = 0, height = 0, maxAge = 10, heightGrowth = getRandomIntInclusive(10,20)) {
    this._age = age;
    this._height = height;
    this._pickedFruitCount = [];
    this._harvested = '';
    this._healthyStatus = true;
    this._heightGrowth = heightGrowth;
  }

  getAge() {
    return this._age;
  }

  getHeight() {
    return this._height;
  }

  getHealtyStatus() {
    if (this._age >= maxAge) {
      this._healthyStatus = false;
    } 

    return this._healthyStatus;
  }


  // Get current states here

  // Grow the tree
  grow() {
    this._age +=  1;
    this._height += this._heightGrowth;
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

let maxAge = getRandomIntInclusive(5, 10);
let mangoTree = new MangoTree(0, 0, maxAge, getRandomIntInclusive(5, 10));

// do {
//   mangoTree.grow();
//   mangoTree.produceMangoes();
//   mangoTree.harvest();

//   console.log(`[Year ${mangoTree._age} Report] Height = ${mangoTree._height} cm | Fruits harvested = ${mangoTree._harvested}`)

//   if (mangoTree._age >= maxAge) {
//     mangoTree.healthyStatus = false;
//     console.log('The tree has met its end. :sad:');
//     break;
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
  constructor() {
    super();
  }
}

class Apple extends Mango{}

// Release 2
class FruitTree {}
class Fruit {}

// Release 3
class TreeGrove {}

let maxApleAge = getRandomIntInclusive(8, 10);
let appleTree = new AppleTree(0, 0, maxApleAge)

do {
  appleTree.grow();
  appleTree.produceMangoes();
  appleTree.harvest();

  console.log(`[Year ${appleTree._age} Report] Height = ${appleTree._height} cm | Fruits harvested = ${appleTree._harvested}`)

  if (appleTree._age >= maxApleAge) {
    appleTree.healthyStatus = false;
    console.log('The tree has met its end. :sad:');
    break;
  } 
} while (appleTree.healthyStatus != false)


function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}