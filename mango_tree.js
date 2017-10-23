"use strict"

const FruitTree = require('./fruit_tree')

class MangoTree extends FruitTree {


}

class Mango {

}

let mangoTree = new MangoTree()
console.log("The tree is alive! :smile: ")
do {
  mangoTree.grow();
  mangoTree.produceMangoes();
  mangoTree.harvest();
  console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height.toFixed(2)} m | Fruits harvested = ${mangoTree.harvested}`)
} while (mangoTree.status != false)
console.log("The tree has met its end. :sad:")
