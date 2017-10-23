"use strict"

// release 0

class MangoTree {

  // Initialize a new MangoTree
  constructor() {
    this._age = 0;
    this._height = 0;
    this.max_fruits = 0;
    this.healthyStatus = true;
    this._harvested = 0;
    this.fruits = null
  }

  getAge() {
    return this._age
  }
  getHeight() {
    return this._height
  }
  getFruits() {
    return this.fruits.length()
  }
  getHealtyStatus() {
    return this.healthyStatus
  }


  // Get current states here

  // Grow the tree
  grow() {
    // this.fruits = []
    if(this._age <= 20 || this._height <= 10){
      // if(this._age <= 5){
        this._age++;
        this._height += +((Math.random() * 1.5) + 0).toFixed(1);
      // }
    } else {
      this.healthyStatus = false;
    }
    return this
  }

  // Produce some mangoes
  produceMangoes() {
    this.fruits = []
    // let mango = new Mango()
    let perDay = Math.floor((Math.random() * 10) + 2);
    for (var idx = 0; idx < perDay; idx++) {
      this.fruits.push(new Mango())
    }
    this._harvested = this.fruits.length
    return this.fruits
  }

  // Get some fruits
  harvest() {
    let good = 0;
    let bad = 0;
    this.fruits.forEach(dataFruits=>{
      if(dataFruits.quality === 'good'){
        good++
      } else {
        bad++
      }
    })
    return `(${good} good, ${bad} bad)`;
  }

}

class Mango {
  // Produce a mango
  constructor() {
    this.quality = this.getQuality()
  }

  getQuality(){
    let quality = Math.round(Math.random())
    // console.log(quality);
    if(quality === 0){
      quality = 'good'
    } else {
      quality = 'bad'
    }
    return quality
  }
}


 // driver code untuk release 0
 let mangoTree = new MangoTree()
 do {
   mangoTree.grow();
   mangoTree.produceMangoes();
   mangoTree.harvest();
   console.log(`[Year ${mangoTree._age} Report] Height = ${mangoTree._height} | Fruits harvested = ${mangoTree._harvested} ${mangoTree.harvest()}`)
 } while (mangoTree.healthyStatus !== false)

// Release 1
class AppleTree {

}
class Apple {
  
}

// Release 2
class FruitTree {}
class Fruit {}

// Release 3
class TreeGrove {}
