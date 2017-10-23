"use strict"

const MangoTree = require('./mango_tree')
const AppleTree = require('./apple_tree')
const PeerTree = require('./peer_tree')


class TreeGrove{
  constructor(){
    this.trees = []
  }

  inputTree(name, produce_per_year, height_per_year, stop_growing, died){
    let obj = {
      name : name,
      obj_tree : name == 'MangoTree' ? new MangoTree(produce_per_year, height_per_year, stop_growing, died)
        : name == 'AppleTree' ? new AppleTree(produce_per_year, height_per_year, stop_growing, died)
        : name == 'PeerTree' ? new PeerTree(produce_per_year, height_per_year, stop_growing, died)
        : null

    }

    // switch (name) {
    //   case 'MangoTree':
    //     this.trees.push(name, new MangoTree(produce_per_year, height_per_year, stop_growing, died))
    //     break;
    //
    //   default: break;
    //
    // }
    this.trees.push(obj)
    // console.log(this.trees);
  }

  show_ages(){
    this.trees.forEach(age=>{
      console.log(age.obj_tree.stop_growing);
    })
  }

  show_trees(){
    this.trees.forEach(tree=>{
      console.log(tree.name);
    })
  }

  mature_trees(){
    this.trees.forEach(tree=>{
      console.log(tree.obj_tree.height_per_year);
    })
  }

  dead_trees(){
    this.trees.forEach(tree=>{
      // console.log(tree.obj_tree.healthyStatus);
      if(tree.obj_tree.healthyStatus){
        console.log(false);
      }
    })
  }

}

let grove = new TreeGrove()

grove.inputTree("MangoTree", 10, 2, 5, 10)
grove.inputTree("MangoTree", 5, 2.4, 12, 15)
grove.inputTree("AppleTree", 4, 1.2, 5, 22)
grove.inputTree("PeerTree", 7, 2, 15, 11)

// //next_year
grove.show_ages()
// //
// // //show tree
grove.show_trees()

//mature tree
grove.mature_trees()

// //show dead tree
grove.dead_trees()

