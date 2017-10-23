"use strict"

// release 0
class FruitTree {
  constructor(age,maxAge,height,fruitName){
    this._age = age;
    this._height = height;
    this._maxAge = maxAge;
    this._maxFruit = null;
    this._harvested = null;
    this.healthyStatus = true;
    this._fruit = null;
    this._fruitName = fruitName;
    this._totalFruit = null;
  }

  getAge() {
    return this._age;
  }
  getHeight() {
    return this._height
  }
  getFruits() {
    if(this._age === this._maxAge){
        return this.getHealtyStatus();
    }
    return this._fruits.total;  
  }
  getHealtyStatus() {
    this.healthyStatus = false;
  }

  // Grow the tree
  grow() {
    if(this._age === 0){
      console.log("The tree is alive! :smile:")
    }
      this._age++;
      this._height = this._height + Math.random()*2;
      return this._age
  }

  // Produce some mangoes
  produceMangoes() {
    // this._maxFruit = Math.floor(Math.random()*15)
    this._fruits = Math.floor(Math.random()*15)
    let objFruit ={
      good : 0,
      bad : 0,
      total :this._fruits
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
    if (this._fruits.total !== 0){
      this.getFruits()
    }
    this._harvested =(this._fruits.total+" ("+this._fruits.good+" good, "+this._fruits.bad+" bad"+")");
    if (this._age > 20){
      console.log("The tree has met its end. :sad:")
    }
  }
}
class Fruit {

}

class MangoTree extends FruitTree{
  // Initialize a new MangoTree
  constructor(age,maxAge,height,fruitName) {
    super(age,maxAge,height,fruitName)
  }
}
class Mango{
  // Produce a mango
  constructor(fruitQuality) {
    this.fruitQuality = fruitQuality;
  }
}
// Release 2

// Release 1
class AppleTree extends FruitTree{
  constructor(age,maxAge,height,fruitName){
    super(age,maxAge,height,fruitName)
  }
}
class Apple extends AppleTree {
  constructor(){
    super()
  }
}

   // driver code untuk release 0
  let mangoTree = new MangoTree(0,20,1,"Mango")
  do {
     mangoTree.grow();
     mangoTree.produceMangoes();
     mangoTree.harvest();
     console.log(`${mangoTree._fruitName} [Year ${mangoTree._age} Report] Height = ${mangoTree._height} m | Fruits harvested = ${mangoTree._harvested}`)
   } while (mangoTree.healthyStatus != false)

  let appleTree = new AppleTree(0,20,1,"Apple")
  do {
     appleTree.grow();
     appleTree.produceMangoes();
     appleTree.harvest();
     console.log(`${appleTree._fruitName} [Year ${appleTree._age} Report] Height = ${appleTree._height} m | Fruits harvested = ${appleTree._harvested}`)
   } while (appleTree.healthyStatus != false)
   
  


// Release 3
class TreeGrove {}
