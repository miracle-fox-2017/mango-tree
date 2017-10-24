"use strict"

// release 0

class MangoTree {

  // Initialize a new MangoTree
  constructor() {
    this.age = 0
    this.height = 0
    this.buahMaks = 20
    this.kumBuah = []
    this.harvested = 0
    this.healthyStatus = true
    this.maxAge = 10
  }

  getAge() {
    return this.age
  }
  getHeight() {
    return this.height
  }
  getFruits() {
    return this.buah
  }
  getHealtyStatus() {
    return this.healthyStatus
  }


  // Get current states here

  // Grow the tree
  grow() {

    if(this.age < this.maxAge && this.healthyStatus == true){
      this.age++
      this.height++
    }
    else{
      this.healthyStatus = false
    }
  }

  // Produce some mangoes
  produceMangoes() {
    let random = Math.round(Math.random()*this.buahMaks)
    for (var i = 0; i < random.length; i++) {
      this.kumBuah.push(new Mango())
    }
  }

  // Get some fruits
  harvest() {
    for (var i = 0; i < this.kumBuah.length; i++) {
      if(this.kumBuah.quality=='good'){
        countGood++
      }else{
        countBad++
      }
    }
    return `jumlah buah : ${this.kumBuah.length} || (good: ${countGood} good;bad: ${countBad} bad)`
  }

}

class Mango {
  // Produce a mango
  constructor() {
    this.quality = this.getQuality
  }
  getQuality(){
      
  }
}


   //driver code untuk release 0
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
