"use strict"

const FruitTree = require('./fruit_tree')

class PeerTree extends FruitTree{
  constructor(produce_per_year, height_per_year, stop_growing, died ){
    super(produce_per_year, height_per_year, stop_growing, died)
  }
}

// driver code untuk release 0
  // let peerTree = new PeerTree(20, 2, 8, 15)
  // // console.log(appleTree);
  // do {
  //   peerTree.grow();
  //    peerTree.produceMangoes();
  //    peerTree.harverst();
  //    console.log(`[Year ${peerTree._age} Report] Height = ${peerTree._height.toFixed(2)} | Fruits harvested = ${peerTree._fruits}
  //      (${peerTree._harvested.quality_good} good, ${peerTree._harvested.quality_bad} bad)`)
  //  } while (peerTree.healthyStatus != false)

module.exports = PeerTree