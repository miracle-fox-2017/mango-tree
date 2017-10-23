"use strict"
class FruitTree {

  // Initialize a new MangoTree
  constructor(produce_per_year, height_per_year, stop_growing, died) {
    this._age = 0
    this._height = 0
    this.healthyStatus = true
    this._fruits = 0
    this._harvested = ''
    this.height_per_year = height_per_year
    this.died = died
    this.stop_growing = stop_growing
    this.produce_per_year = produce_per_year

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

  // Grow the tree
  grow() {
    this.setAge(1)
    if(this.getAge() < this.died){
      if(Math.floor(this.getAge()) <= this.stop_growing){
        this.setHeight(Math.random() * this.height_per_year)
      }
    }else{
      this.setHealthyStatus(false)
    }
  }

  // Produce some mangoes
  produceMangoes() {
    let jumlah = Math.ceil(Math.random() * this.produce_per_year)
    this.setFruits(jumlah)
  }

  // Get some fruits
  harverst() {
    let good = Math.floor(Math.random() * this.getFruits())
    let bad = this.getFruits() - good
    // console.log(good, bad, jumlah);
    this._harvested = new Fruit(good, bad)

  }

}

class Fruit {
  // Produce a mango
  constructor(good, bad) {
    this.quality_good = good
    this.quality_bad = bad
  }
}

// let fruitTree = new FruitTree(20, 2, 8, 15)
//
// do {
//   fruitTree.grow();
//   fruitTree.produceMangoes();
//   fruitTree.harverst();
//    console.log(`[Year ${fruitTree._age} Report] Height = ${fruitTree._height.toFixed(2)} | Fruits harvested = ${fruitTree._fruits}
//      (${fruitTree._harvested.quality_good} good, ${fruitTree._harvested.quality_bad} bad)`)
//  } while (fruitTree.healthyStatus != false)

// fruitTree.harverst()

module.exports = FruitTree, Fruit