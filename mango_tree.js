"use strict"

// release 0

class MangoTree {

  // Initialize a new MangoTree
  constructor() {
    this._Age = 0;
    this._Height = 0;
    this.harvest = 0;
    this.kumpulanbuah = [];
    this.jumlahbuah = 0;
    this.healthyStatus = true;
  }
  getAge() {
    return this._Age;
  }
  getHeight() {
    return this._Height;
  }
  getFruits() {
    return this._Fruits
  }
  getHealtyStatus() {
    return this.healthyStatus
  }
  // Get current states here
  // Grow the tree
  grow() {
    this._Age +=1
    // if(this._Age === 10){return this._Age}
    if(this._Age === 9) {this.healthyStatus = false}
    if(this._Height < 5){(this._Height += Math.random() * 1)}

  }

  // Produce some mangoes
  produceMangoes() {
  }

  // Get some fruits
  harvest() {
  }
}


class Mango {
  // Produce a mango
  constructor() {
  }
}


  // * driver code untuk release 0
   let mangoTree = new MangoTree()
  //  console.log(MangoTree.grow());
   do {
     mangoTree.grow();
    //  mangoTree.produceMangoes();
    //  mangoTree.harverst();
     console.log(`[Year ${mangoTree._Age} Report] Height = ${mangoTree._Height} | Fruits harvested = ${mangoTree.harvest}`)
   } while (mangoTree.healthyStatus != false)
      // console.log(`The tree has met its end :sad:`);

// Release 1
// class AppleTree {}
// class Apple {}
//
// // Release 2
// class FruitTree {}
// class Fruit {}
//
// // Release 3
// class TreeGrove {}
