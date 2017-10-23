"use strict"

// release 0

class FruitTree {

  // Initialize a new MangoTree
  constructor() {
    this._age = 0
    this._height = 0
    this._max_capacity = 10
    this._produksi = []
    this._harvested = ''
    this._healthyStatus = true
    this._stopGrowing = 9
    this._batasUmur = 10
  }

  getAge() {
    return this._age
  }
  getHeight() {
    return this._height
  }
  getFruits() {
    return this._harvested
  }
  getHealtyStatus() {
    return this._healthyStatus
  }


  // Get current states here

  // Grow the tree
  grow() {

    if(this._age < this._stopGrowing){
      this._age++
      let random = Math.random()
      this._height += random
    }
    else{
      this._healthyStatus = false
    }

    if(this._age >= this._batasUmur){
      this._healthyStatus = false
      console.log(this._healthyStatus);
     }
  }

  // Produce some mangoes
  produceFruit() {
    let random  = Math.random() * 10
    for(let i =0; i < random; i++){
      this._produksi.push(new Fruit())
    }

}


  // Get some fruits
  harvest() {

    let good = 0
    let bad = 0

    for(let i =0; i < this._produksi.length; i++){
      if(this._produksi[i].quality === 'good'){
        good++
      }else{
        bad++
      }
    }
    this._harvested = `${this._produksi.length} ${good} good ${bad} bad`
      return this._harvested
  }



}

class Fruit {
  constructor(){
    this.quality = this.kualitas()
  }
  kualitas(){
    let arr = ['good', 'bad']

    let random = Math.round(Math.random())
    return(random == 0)? 'good':'bad'
  }
}




class MangoTree extends FruitTree {
  // Produce a mango
  constructor() {
    super()
    this._stopGrowing = 10
    this._batasUmur = 15
  }

}





let mangoTree = new MangoTree()
console.log('============================ Mango Tree Growth ================================');
console.log('The Mangoo Tree Is Alive!');
//console.log(pohon.produceMangoes());console.log(pohon.harvest());
do {
  mangoTree.grow();
  mangoTree.produceFruit();
  mangoTree.harvest();
  console.log(`[Year ${mangoTree._age} Report] Height = ${mangoTree._height.toFixed(2)} M | Fruits harvested = ${mangoTree._harvested}`)
} while (mangoTree._healthyStatus != false)

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
