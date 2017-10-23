"use strict"

// release 0

class MangoTree {

  // Initialize a new MangoTree
  constructor() {
    this._age = 0
    this._height = 0
    this.healthyStatus = true
    this._fruits = 0
    this._harvested = ''

  }

  getAge() {
    return this._age
  }
  getHeight() {
    return this._height
  }
  getFruits() {
    return this._fruits
  }
  getHealtyStatus() {
    return this.healthyStatus
  }
  getFruits(){
    return this._fruits
  }

  setAge(num) {
     this._age+=num
  }

  setHeight(num){
    this._height += num
  }

  setHealthyStatus(str){
    this.healthyStatus = str
  }

  setFruits(num){
    this._fruits = num
  }

  // Get current states here

  // Grow the tree
  grow() {
    this.setAge(1)
    if(this.getAge() < 20){
      if(Math.floor(this.getHeight()) <= 5){
        this.setHeight(Math.random()*1)
      }
    }else{
      this.setHealthyStatus(false)
    }
  }

  // Produce some mangoes
  produceMangoes() {
    let jumlah = Math.ceil(Math.random() * 20)
    this.setFruits(jumlah)
  }

  // Get some fruits
  harverst() {

    let good = Math.floor(Math.random() * this.getFruits())
    let bad = this.getFruits() - good
    // console.log(good, bad, jumlah);
    this._harvested = new Mango(good, bad)
  }

}

class Mango {
  // Produce a mango
  constructor(good, bad) {
    this.quality_good = good
    this.quality_bad = bad
  }
}


// driver code untuk release 0
  let mangoTree = new MangoTree()
  do {
    mangoTree.grow();
     mangoTree.produceMangoes();
     mangoTree.harverst();
     console.log(`[Year ${mangoTree._age} Report] Height = ${mangoTree._height.toFixed(2)} | Fruits harvested = ${mangoTree._fruits}
       (${mangoTree._harvested.quality_good} good, ${mangoTree._harvested.quality_bad} bad)`)
   } while (mangoTree.healthyStatus != false)

// console.log(mangoTree.produceMangoes());

// // Release 1
// class AppleTree {}
// class Apple {}
//
// // Release 2
// class FruitTree {}
// class Fruit {}
//
// // Release 3
// class TreeGrove {}

// let mangoTree = new MangoTree()
// // do {
// //   mangoTree.grow();
// //    console.log(`[Year ${mangoTree._age} Report] Height = ${mangoTree._height} m | Healthy Status = ${mangoTree.healthyStatus}`)
// //  } while (mangoTree.healthyStatus != false)
// mangoTree.produceMangoes()
//  console.log(mangoTree.harvest());