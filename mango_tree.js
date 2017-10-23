"use strict"

// release 0

class MangoTree {

  // Initialize a new MangoTree
  constructor() {
    this.age = 0;
    this.height = 0;
    this.maxFruit = [];
    this.avaFruit = [];
    this.petik = [];
    this.condition = true;
  }

  getAge() {
    return this.age;
  }
  getHeight() {
    return this.height;
  }
  getFruits() {

  }
  getHealtyStatus() {
    return this.condition;
  }

  // Get current states here

  // Grow the tree
  grow() {
    this.age = this.age + 1

    if(this.age <= 10) {
      this.height = this.height + (Math.random() * 4)
    }
    else {
      this.condition = false
    }

    if(this.age + 1 > 10) {
      this.condition = false
    }

  }

  // Produce some mangoes
  produceMangoes() {
    this.avaFruit = []
    if(this.age <= 10) {
      var total = Math.floor(Math.random() * 10)

      for(var i = 0; i <= total; i++) {
        this.avaFruit.push(new Mango())
      }
    }
  }

  // Get some fruits
  harvest() {
    let hasil = 0
    let good = 0
    let bad = 0
    this.petik = []

    if(this.age <= 10) {
      for(var i = 0; i < this.avaFruit.length; i++) {
        if(this.avaFruit[i].quality == 'Good') {
          good = good + 1
        }else {
          bad = bad + 1
        }
      }

      hasil = good + bad
      this.petik.push(good)
      this.petik.push(bad)
      this.petik.push(hasil)
    }
  }
}

class Mango {
  // Produce a mango
  constructor() {
    this.quality = this.random()
  }

  random() {
    var data = Math.round(Math.random() * 2)
    if(data == 1) {
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

  let mangoTree = new MangoTree()

  do {
    mangoTree.grow()
    mangoTree.produceMangoes()
    mangoTree.harvest()
    console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} | Fruits harvested = ${mangoTree.petik[2]} (${mangoTree.petik[0]} good, ${mangoTree.petik[1]} bad)`)

  } while(mangoTree.condition == true)
  console.log('Pohon telah tiada');

// Release 1
class AppleTree {}
class Apple {}

// Release 2
class FruitTree {}
class Fruit {}

// Release 3
class TreeGrove {}
