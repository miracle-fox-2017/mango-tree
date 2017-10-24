"use strict"

let FruitTree = require('./fruit_tree')

class PearTree extends FruitTree {
  constructor(name,fruits,height,age,health){
    super(name,fruits,height,age,health)
  }

  getFruits() {
    let randomFruits
    if(this.age <= 5){
      randomFruits = 0
    }else{
      randomFruits = Math.ceil(Math.random()*this.maxFruits)
    }
    return randomFruits
  }

  getHeight() {
    let randomHeight = Math.random()*2
    if(this.age <= 15){
      this.height += randomHeight;
    }
  }

  getHealtyStatus() {
    if(this.age == 18){
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
      this.fruits.push(new Pear(quality))
    }
  }

}

class Pear {
  constructor(status) {
    this.quality = status
  }
}

let pearTree = new PearTree()
do {
  pearTree.grow();
  pearTree.produceFruit();
  pearTree.harvest();
  console.log(`[Year ${pearTree.age} Report] Height = ${pearTree.height.toFixed(1)} m | Fruits harvested = ${pearTree.harvested}`)
} while (pearTree.healthyStatus != false)

module.exports = PearTree;
