"use strict"

// release 0

class MangoTree {

  // Initialize a new MangoTree
  constructor(age,height,fruitCapacity,fruitGrown,harvested,healthyStatus,good,bad,total) {
    this._age            = 0
    this._height         = height
    this._fruitCapacity  = fruitCapacity
    this._fruitGrown     = fruitGrown
    this._harvested       = harvested
    this._healthyStatus   = true
    this.good = 0
    this.bad = 0
    this.total = 0

  }

  getAge() {
    return this._age
  }
  getHeight() {
    return this._height
  }
  getFruits() {
    return this._fruitGrown
  }
  getHealtyStatus() {
    return this._healthyStatus
  }


  // Get current states here

  // Grow the tree
  
  grow() { 
    
    if(this._age < 20){
      this._height = `${Math.floor(this._age * .38)}m`
      this._age++
       
    }
    else{
      this.healthyStatus = false
      console.log('The tree died :sad:')
      
      
    }
  }

  // Produce some mangoes
  produceMangoes() {
    this.good = Math.floor(Math.random() * 7) + 1 
    this.bad = Math.floor(Math.random() * 7) + 1 
    this.total = this.good + this.bad
    
  }

  // Get some fruits
  harvest() {
    
    this._harvested = `${this.total} (${this.good} good, ${this.bad} bad)`
  }

}

class Mango {
  // Produce a mango
  constructor(quality) {
    this.quality = quality
  }
  harvest(){
   
      
    
  }
}

/**
  * driver code untuk release 0
  * let mangoTree = new MangoTree()
  * do {
  *   mangoTree.grow();
  *   mangoTree.produceMangoes();
  *   mangoTree.harvest();
  *   console.log(`[Year ${mangotree._age} Report] Height = ${mangotree._height} | Fruits harvested = ${mangotree._harvested}`)
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

 let mangoTree = new MangoTree()
 do {
   mangoTree.grow();
   mangoTree.produceMangoes();
   mangoTree.harvest();
  console.log(`[Year ${mangoTree._age} Report] Height = ${mangoTree._height} | Fruits harvested = ${mangoTree._harvested}`)
 } while (mangoTree.healthyStatus != false)