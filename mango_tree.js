"use strict"

// release 0

class MangoTree {

  // Initialize a new MangoTree
  constructor() {
    this.age = 0
    this.height = 0
    this.buah = 20
    this.stat = stat
  }

  getAge() {
    this.age
  }
  getHeight() {
    this.height
  }
  getFruits() {
    this.buah
  }
  getHealtyStatus() {
    this.stat
  }


  // Get current states here

  // Grow the tree
  grow() {
    this.age += 1
    if(this.age <= 10){
      this.stat = true
    }
    else{
      this.stat = false
    }
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
  constructor(quality) {
    this.quality = quality
  }
}


   driver code untuk release 0
   let mangoTree = new MangoTree()
   do {
     mangoTree.grow();
     mangoTree.produceMangoes();
     mangoTree.harverst();
     console.log(`[Year ${tree._age} Report] Height = ${tree._height} | Fruits harvested = ${tree._harvested}`)
   } while (mangoTree.healthyStatus != false)


// Release 1
class AppleTree {}
class Apple {}

// Release 2
class FruitTree {}
class Fruit {}

// Release 3
class TreeGrove {}
