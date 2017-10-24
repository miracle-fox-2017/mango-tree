"use strict"

let FruitTree = require('./fruit_tree')

class AppleTree extends FruitTree {
  constructor(name,fruits,height,age,health){
    super(name,fruits,height,age,health)
  }

  getFruits() {
    let randomFruits
    if(this.age <= 3){
      randomFruits = 0
    }else{
      randomFruits = Math.ceil(Math.random()*this.maxFruits)
    }
    return randomFruits
  }

  getHeight() {
    let randomHeight = Math.random()*2
    if(this.age <= 18){
      this.height += randomHeight;
    }
  }

  getHealtyStatus() {
    if(this.age == 20){
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
      this.fruits.push(new Apple(quality))
    }
  }

}

class Apple {
  constructor(status) {
    this.quality = status
  }
}

let appleTree = new AppleTree()
do {
  appleTree.grow();
  appleTree.produceFruit();
  appleTree.harvest();
  console.log(`[Year ${appleTree.age} Report] Height = ${appleTree.height.toFixed(1)} m | Fruits harvested = ${appleTree.harvested}`)
} while (appleTree.healthyStatus != false)

module.exports = AppleTree;
