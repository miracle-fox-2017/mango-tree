"use strict"

let FruitTree = require('./fruit_tree')

class MangoTree extends FruitTree {
  constructor(name,fruits,height,age,health){
    super(name,fruits,height,age,health)
  }

  getFruits() {
    let randomFruits
    if(this.age <= 2){
      randomFruits = 0
    }else{
      randomFruits = Math.ceil(Math.random()*this.maxFruits)
    }
    return randomFruits
  }

  getHeight() {
    let randomHeight = Math.random()*2
    if(this.age <= 20){
      this.height += randomHeight;
    }
  }

  getHealtyStatus() {
    if(this.age == 25){
      this.healthyStatus = false
    }
  }

  produceFruit() {
    let randomFruits = this.getFruits()
    let quality
    for (var i = 0; i < randomFruits; i++) {
      let grade = Math.ceil(Math.random(0)*10)
      if(grade <= 5){
        quality = 'bad'
      }else{
        quality = 'good'
      }
      this.fruits.push(new Mango(quality))
    }
  }

}

class Mango {
  constructor(status) {
    this.quality = status
  }
}

let mangoTree = new MangoTree()
do {
  mangoTree.grow();
  mangoTree.produceFruit();
  mangoTree.harvest();
  console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height.toFixed(1)} m | Fruits harvested = ${mangoTree.harvested}`)
} while (mangoTree.healthyStatus != false)

module.exports = MangoTree;
