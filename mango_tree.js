"use strict"

// release 0
const FruitTree = require('./fruit_tree')
class MangoTree extends FruitTree{
  constructor(produce_per_year, height_per_year, stop_growing, died ){
    super(produce_per_year, height_per_year, stop_growing, died)
  }

}


// driver code untuk release 0
  // let mangoTree = new MangoTree(20, 2, 8, 10)
  // do {
  //   mangoTree.grow();
  //    mangoTree.produceMangoes();
  //    mangoTree.harverst();
  //    console.log(`[Year ${mangoTree._age} Report] Height = ${mangoTree._height.toFixed(2)} | Fruits harvested = ${mangoTree._fruits}
  //      (${mangoTree._harvested.quality_good} good, ${mangoTree._harvested.quality_bad} bad)`)
  //  } while (mangoTree.healthyStatus != false)

module.exports = FruitTree
