"use strict"

// release 0

class MangoTree {

  // Initialize a new MangoTree
  constructor() {
    this._age = 0;
    this._height = 1;
    this._maxFruit = null;
    this._harvested = null;
    this.healthyStatus = null;
    this._fruit = null;
  }

  getAge() {
    return this._age;
  }
  getHeight() {
    return this._height
  }
  getFruits() {
    if(this._age === 20){
        return this.getHealtyStatus();
    }
    return this._fruits.totalFruit;  
  }
  getHealtyStatus() {
    this.healthyStatus = false;
  }

  // Get current states here

  // Grow the tree
  grow() {
    if(this._age === 0){
      console.log("The tree is alive! :smile:")
    }
      this._age++;
      this._height = this._height + Math.random()*2;
  }

  // Produce some mangoes
  produceMangoes() {
    // this._maxFruit = Math.floor(Math.random()*15)
    this._fruits = Math.floor(Math.random()*15)
    let objFruit ={
      good : 0,
      bad : 0,
      totalFruit :this._fruits
    }
    for (let i = 0 ; i<this._fruits ; i++){
      let checkHealth = Math.floor(Math.random()*2)
      if(checkHealth === 1){
        objFruit.good++;
      }
      if(checkHealth === 0){
        objFruit.bad++;
      }
    }
    this._fruits = objFruit;
    return this._fruits;
  }

  // Get some fruits
  harvest() {
    if (this._fruits.totalFruit !== 0){
      this.getFruits()
    }
    this._harvested =(this._fruits.totalFruit+" ("+this._fruits.good+" good, "+this._fruits.bad+" bad"+")");
    if (this._age > 20){
      console.log("The tree has met its end. :sad:")
    }
  }
}
class Mango{
  // Produce a mango
  constructor(fruitQuality) {
    this.fruitQuality = fruitQuality;
  }
}
// *
//   * driver code untuk release 0
  // let mangoTree = new MangoTree()
  // do {
  //    mangoTree.grow();
  //    mangoTree.produceMangoes();
  //    mangoTree.harvest();
  //    console.log(`[Year ${mangoTree._age} Report] Height = ${mangoTree._height} m | Fruits harvested = ${mangoTree._harvested}`)
  //  } while (mangoTree.healthyStatus != false)

// Release 1
class AppleTree extends MangoTree{
  constructor(){
    super()
  }
}
class Apple extends AppleTree {
  constructor(){
    super()
  }
}

  let appleTree = new AppleTree()
  do {
     appleTree.grow();
     appleTree.produceMangoes();
     appleTree.harvest();
     console.log(`[Year ${appleTree._age} Report] Height = ${appleTree._height} m | Fruits harvested = ${appleTree._harvested}`)
   } while (appleTree.healthyStatus != false)
   console.log("The tree has met its end. :sad:")
  
// Release 2
class FruitTree {}
class Fruit {}

// Release 3
class TreeGrove {}
