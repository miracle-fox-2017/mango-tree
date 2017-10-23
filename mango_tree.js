"use strict"

// release 0

class MangoTree {

  // Initialize a new MangoTree
  constructor() {
    this.age = 0
    this.height = 0
    this.healthyStatus = true
    this.buahtersedia = []
    this.harvested = []
  }

  getAge() {
    return this.age
  }
  getHeight() {
    return this.height
  }
  getFruits() {

  }
  getHealtyStatus() {
    return this.healthyStatus
  }


  // Get current states here

  // Grow the tree
  grow() {
    this.age = this.age + 1

    if(this.age <= 6) {
      this.height = this.height + (Math.random() * 4)
    }
    else {
      this.healthyStatus = false
    }

    if(this.age + 1 > 6) {
      this.healthyStatus = false
    }
  }

  // Produce some mangoes
  produceMangoes() {
    this.buahtersedia = []
    if(this.age <= 6) {
      var jumlahBuah = Math.floor(Math.random() * 10)

      for(var i = 0; i <= jumlahBuah; i++) {
        this.buahtersedia.push(new Mango())
      }
    }
  }

  // Get some fruits
  harvest() {
    var total = 0
    var good = 0
    var bad = 0
    this.harvested = []

    if(this.age <= 6) {
      for(var i = 0; i < this.buahtersedia.length; i++) {
        if(this.buahtersedia[i].quality == 'good') {
          good = good + 1
        }
        else {
          bad = bad + 1
        }
      }

      total = good + bad
      this.harvested.push(good)
      this.harvested.push(bad)
      this.harvested.push(total)
    }
  }
}

class Mango {
  // Produce a mango
  constructor() {
    this.quality = this.random()
  }

  random() {
    var bilAcak = Math.round(Math.random())
    if(bilAcak == 1) {
      return 'good'
    }
    else {
      return 'bad'
    }
  }
}

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
class AppleTree {}
class Apple {}

// Release 2
class FruitTree {}
class Fruit {}

// Release 3
class TreeGrove {}

var mangga = new MangoTree()

do {
  mangga.grow()
  mangga.produceMangoes()
  mangga.harvest()
  console.log(`[Year ${mangga.age} Report] Height = ${mangga.height} | Fruits harvested = ${mangga.harvested[2]} (${mangga.harvested[0]} good, ${mangga.harvested[1]} bad)`)

} while(mangga.healthyStatus == true)
console.log('Pohon telah tiada');
