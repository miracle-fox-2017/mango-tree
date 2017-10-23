"use strict"

// release 0

class MangoTree {

  // Initialize a new MangoTree
  constructor() {
    this._age=0;
    this._height=0;
    this._maksbuah=50;
    this._arrFruit=[];
    this._harvested=0;
    this._isHealthy=true;
  }

  getAge() {
    return this._age
  }
  getHeight() {
    return this._height
  }
  getFruits() {
    return this._arrFruit
  }
  getHealtyStatus() {
    return this._isHealthy
  }


  // Get current states here

  // Grow the tree
  grow() {
    this._age += 1
    this._height += Math.floor(Math.random()*5+1)
    if(this._age === 10){
      this._isHealthy = false
    }
  }

  // Produce some mangoes
  produceMangoes() {
    this._arrFruit.push('manggoes')
  }

  // Get some fruits
  harverst() {
    this.harvest += 3
  }

}

class Mango {
  // Produce a mango
  constructor() {

  }
}


   //driver code untuk release 0
   let mangoTree = new MangoTree()
   do {
     mangoTree.grow();
     mangoTree.produceMangoes();
     mangoTree.harverst();
     console.log(`[Year ${mangoTree._age} Report] Height = ${mangoTree._height} | Fruits harvested = ${mangoTree._harvested}`)
   } while (mangoTree._isHealthy != false)


// Release 1
class AppleTree {}
class Apple {}

// Release 2
class FruitTree {}
class Fruit {}

// Release 3
class TreeGrove {}
