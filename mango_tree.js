"use strict"

// release 0
// Release 2
class FruitTree {
  constructor() {
    this.name = 'Fruits'
    this.age = 0
    this.height = 0
    this.maxBuah = 10
    this.fruits = []
    this.healty = true
    this.maxAge = 20
    this.harvest = this.harvested()
}

  getAge() {
    return this.age
  }

  getHeight() {
    return this.height
  }
  getFruits() {
    return this.fruits
  }
  getHealtyStatus() {
    return this.healty
  }


// Get current states here

// Grow the tree
  grow() {
    this.age++
    this.height += Math.random()
    if(this.age >= this.maxAge || this.height > 5){
      this.healty = false
    }
  }

// Produce some mangoes
  produceMangoes() {
    let max = Math.ceil( Math.random()* +this.maxBuah);
  // console.log(max);
    for (let i = 0;i<max;i++){
      this.fruits.push(new Mango())
    }
  }

// Get some fruits
  harvested() {
    let good = 0;
    let bad = 0
    for (let i = 0; i < this.fruits.length; i++){
      if (this.fruits[i].quality === 'good'){
        debugger
        good++
      }
      else {
        bad++
      }
    }
    return `${this.fruits.length} (${good} good, ${bad} bad)`
  }

}

class MangoTree extends FruitTree{
  constructor(){
    super()
    this.name = 'MangoTree'
  }


}
class AppleTree extends FruitTree{
  constructor(){
    super()
    this.name = 'AppleTree'
  }
}

class Fruit {
  constructor() {
    this.quality = this.kualitas();
  }
  kualitas(){
    let checkquality = ['good','bad']
    let random = Math.floor(Math.random()*2)
    let check = checkquality[random]
    return check
  }
}
  // Initialize a new MangoTree

class Mango extends Fruit{
  // Produce a mango
}


class Apple extends Fruit{

}


let fruitTree = new AppleTree()

// console.log(mangoTree.produceMangoes());
// console.log(mangoTree.harvest());
 do {
   fruitTree.grow();
   fruitTree.produceMangoes();
   fruitTree.harvested();
   console.log(`[Year ${fruitTree.age} Report] Height = ${fruitTree.height.toFixed(1)} M | Fruits harvested = ${fruitTree.harvested()}`)
 } while (fruitTree.healty != false)
 console.log(`The three has meet its end. :sad:`);
/**
  * driver code untuk release 0
  * let mangoTree = new MangoTree()
  * do {
  *   mangoTree.grow();
  *   mangoTree.produceMangoes();
  *   mangoTree.harverst();
  *   console.log(`[Year ${tree._age} Report] Height = ${tree._height} | Fruits harvested = ${tree._harvested}`)
  * } while (mangoTree.healthyStatus != false)
  */

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
