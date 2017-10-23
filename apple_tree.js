"use strict"

const FruitTree = require('./fruit_tree')

class AppleTree extends FruitTree{
  constructor(produce_per_year, height_per_year, stop_growing, died ){
    super(produce_per_year, height_per_year, stop_growing, died)
  }
}

// driver code untuk release 0
  // let appleTree = new AppleTree(20, 2, 8, 15)
  // // console.log(appleTree);
  // do {
  //   appleTree.grow();
  //    appleTree.produceMangoes();
  //    appleTree.harverst();
  //    console.log(`[Year ${appleTree._age} Report] Height = ${appleTree._height.toFixed(2)} | Fruits harvested = ${appleTree._fruits}
  //      (${appleTree._harvested.quality_good} good, ${appleTree._harvested.quality_bad} bad)`)
  //  } while (appleTree.healthyStatus != false)

module.exports = AppleTree