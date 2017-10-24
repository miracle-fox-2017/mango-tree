"use strict"

// release 0

class MangoTree {

  // Initialize a new MangoTree
  constructor() {
    this._age = 0
    this._height = 0
    this._max_harvest = Math.floor(Math.random()*100)
    this._hanging_fruit = []
    // this.max_age = 10
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
      this._height += Math.floor(Math.random()*10)
    } else {
        this._height += Math.floor(Math.random()*20)
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
    debugger
    let arr = []
    let good = 0
    let bad = 0
    this._harvested = Math.round(this._produce *90 /100)
    let harvested = 0
    harvested += this._harvested
    for(let i = 0; i < harvested; i++){
      arr.push(new Mango())
    }
    for(let j = 0; j < arr.length; j++){
      if(arr[j].quality === 'bad'){
        bad++
      } else if (arr[j].quality === 'good'){
        good++
      }
    }
    // console.log(arr)

    return `${good} good | ${bad} bad`
  }

}

class Mango {
  // Produce a mango
  constructor() {
    this.quality = this.getQuality()
  }

  getQuality(){
    let randomQuality = Math.floor(Math.random()*2)
    if(randomQuality === 0){
      return 'bad'
    } else if (randomQuality === 1){
      return 'good'
    }
  }
}


  //  driver code untuk release 0
   let mangoTree = new MangoTree()
   do {
    mangoTree.grow();
    mangoTree.produceMangoes();
    mangoTree.harvest();
    console.log(`[Year ${mangoTree._age} Report] Height = ${mangoTree._height} cm | Fruits harvested = ${mangoTree.harvest()}`)
  } while (mangoTree._healthyStatus != false)


// Release 1
class AppleTree {}
class Apple {}

// Release 2
class FruitTree {}
class Fruit {}

// Release 3
class TreeGrove {}
