"use strict"

// release 0

class MangoTree {

  // Initialize a new MangoTree
  constructor() {
    this._age = 0
    this._height = 0
    this._max_harvest = Math.floor(Math.random()*100)
    this._produce = 0
    this._harvested = 0
    this._healthyStatus = true
  }

  getAge() {
    return this._age
  }
  getHeight() {
    return this._height
  }
  getFruits() {
    return this._hanging_fruit
  }
  getHealtyStatus() {
    return this._healthyStatus
  }


  // Get current states here

  // Grow the tree
  grow() {
    this._age += 1
    if(this._age > 30 && this._age < 60){
      this._height += Math.floor(Math.random())
    } else {
        this._height += Math.floor(Math.random()*10)
    }
  if(this._age > 60){
      this._healthyStatus = false
    }

  }

  // Produce some mangoes
  produceMangoes() {
    if(this._age <= 5){
      this._produce = Math.floor(Math.random()*20)
    }
    if(this._age > 5 && this._age < 15){
      this._produce = Math.floor(Math.random()*18)
    }
    if(this._age > 15 && this._age < 30){
      this._produce = Math.floor(Math.random()*15)
    }
    if(this._age > 30 && this._age < 50){
      this._produce = Math.floor(Math.random()*12)
    }
    if(this._age > 50){
      this._produce = Math.floor(Math.random()*10)
    }
  }

  // Get some fruits
  harvest() {
    let bad = 0
    let good = 0
    this._harvested = Math.round(this._produce *90 /100)
    bad = this._harvested - Math.round(Math.random*10)
    good = this._harvested - bad

    return `${good} good | ${bad} bad`
  }

}

class Mango {
  // Produce a mango
  constructor(quality) {
    this.quality = quality
  }
}


  //  driver code untuk release 0
   let mangoTree = new MangoTree()
   do {
    mangoTree.grow();
    mangoTree.produceMangoes();
    mangoTree.harvest();
    console.log(`[Year ${mangoTree._age} Report] Height = ${mangoTree._height} cm | Fruits harvested = ${mangoTree._harvested}`)
  } while (mangoTree._healthyStatus != false)


// Release 1
class AppleTree {}
class Apple {}

// Release 2
class FruitTree {}
class Fruit {}

// Release 3
class TreeGrove {}
