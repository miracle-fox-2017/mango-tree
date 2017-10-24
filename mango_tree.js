"use strict"


// Release 2
// fruit tree class inheritance
class FruitTree {
  constructor(treeAge, treeHeight, treeMature, treeStatus) {
    this.name            = 'fruit'
    this._age            = treeAge
    this._height         = treeHeight
    this.mature          = treeMature
    this.fruit_available = []
    this._harvested      = 0
    this.healthyStatus   = treeStatus
    this.maximum_age     = 0
  }

  // Get current states here
  heigthRandom(){
    let grow_height = Math.floor(Math.random() * 3 - 1) + 1
    // console.log(grow_height)
    return grow_height
  }
  // Grow the tree
  grow() {
    this._age += 1
    if(this._age <= this.maximum_age){
      this._height += this.heigthRandom()
    }else if(this._age >= this.maximum_age){
      this.healthyStatus = false
    }
  }

  // Produce some mangoes
  produceFruits(param_fruit) {
    let newFruit = param_fruit
    // let fruit = new newFruit()
    // console.log('>>>>>', param_fruit);

    this.fruit_available = []
    let productive_fruit_peryear = Math.floor(Math.random() * 13 - 1) + 1
    for(let i=0; i<productive_fruit_peryear; i++){
      this.fruit_available.push(new newFruit())
    }
    // console.log('======fruit available====>>>',this.fruit_available)
    return this.fruit_available

  }

  // Get some fruits
  harvest() {
    let goodQuality = 0
    let badQuality  = 0
    // console.log('<<<<>', this.fruit_available);
    for(let i=0; i<this.fruit_available.length; i++){
      // console.log('<><>><<>', this.fruit_available[i].quality);
      if(this.fruit_available[i].quality == 'good'){
        goodQuality++
      }else{
        badQuality++
      }

    }
    // console.log('>>>>>>', goodQuality);
    return `${goodQuality + badQuality} (${goodQuality} good, ${badQuality} bad)`
  }

}

class MangoTree extends FruitTree{
  constructor(treeAge, treeHeight, treeMature, treeStatus){
    super(treeAge, treeHeight, treeMature, treeStatus)
    this.name          = 'MangoTree'
    this._age          = treeAge
    this._height       = treeHeight
    this.healthyStatus = treeStatus
    this.maximum_age   = 19

  }

  produceMangoes(){
    super.produceFruits( Mango);
  }
}

class AppleTree extends FruitTree{
  constructor(treeAge, treeHeight, treeMature, treeStatus){
    super(treeAge, treeHeight, treeMature, treeStatus)
    this.name          = 'AppleTree'
    this._age          = treeAge
    this._height       = treeHeight
    this.healthyStatus = treeStatus
    this.maximum_age   = 11
  }

  produceApples(){
    super.produceFruits( Apple);
  }
}

class PearTree extends FruitTree{
  constructor(treeAge, treeHeight, treeMature, treeStatus){
    super(treeAge, treeHeight, treeMature, treeStatus)
    this.name          = 'PearTree'
    this._age          = treeAge
    this._height       = treeHeight
    this.healthyStatus = treeStatus
    this.maximum_age   = 16
  }

  producePears(){
    super.produceFruits( Pear);
  }
}


// fruit class inheritance
class Fruit {
  constructor(name) {
    this.name    = name
    this.quality = this.getQuality()
  }
  getQuality(){
    let hasil = ''
    let randQuality = Math.floor(Math.random() * 2 - 1) + 1
    // console.log(randQuality);
    if(randQuality === 0){
      hasil = 'good'
    }else{
      hasil = 'bad'
    }
    // console.log('<<<<<< ',this.quality);
    // console.log(hasil);
    return hasil
  }
}

class Apple extends Fruit{
  constructor(){
    super('apple')
  }
}

class Mango extends Fruit{
  constructor(){
    super('mango')
  }
}

class Pear extends Fruit{
  constructor(){
    super('pear')
  }
}

let fruit = new Fruit()
let apple = new Apple()
let mango = new Mango()
let pear = new Pear()
// console.log(mango);

let fruitTree = new FruitTree()
let appleTree = new AppleTree()
let mangoTree = new MangoTree()
let pearTree = new PearTree()
//
// console.log('-------------', fruitTree);
//
//
// console.log('\n============================ MANGGO TREE REPORT =======================\n')
//    console.log(`The tree is alive! :smile:`)
//    do {
//      mangoTree.grow();
//      mangoTree.produceMangoes();
//      mangoTree.harvest();
//      console.log(`[Year ${mangoTree._age} Report] Height = ${mangoTree._height} m | Fruits harvested = ${mangoTree.harvest()}`)
//    } while (mangoTree.healthyStatus != false)
// console.log(`The tree has met its end. :sad:`)
//
// console.log('\n============================ APPLE TREE REPORT =======================\n')
//    console.log(`The tree is alive! :smile:`)
//    do {
//      appleTree.grow();
//      appleTree.produceApples();
//      appleTree.harvest();
//      console.log(`[Year ${appleTree._age} Report] Height = ${appleTree._height} m | Fruits harvested = ${appleTree.harvest()}`)
//    } while (appleTree.healthyStatus != false)
//    console.log(`The tree has met its end. :sad:`)
//
// console.log('\n============================ PEAR TREE REPORT =======================\n')
// console.log(`The tree is alive! :smile:`)
//   do {
//     pearTree.grow();
//     pearTree.producePears();
//     pearTree.harvest();
//     console.log(`[Year ${pearTree._age} Report] Height = ${pearTree._height} m | Fruits harvested = ${pearTree.harvest()}`)
//   } while (pearTree.healthyStatus != false)
// console.log(`The tree has met its end. :sad:`)


// Release 3
class TreeGrove {
  constructor(){
    this.trees = []
  }

  nextyear(){
    let container = []
    for (let i = 0; i < this.trees.length; i++) {
      container.push(this.trees[i].grow())
    }
    return `>>> one year later <<<`
  }

  inputTree(treeName, treeAge, treeHeight, treeMature, treeStatus){
    if(treeName == 'MangoTree'){
      this.trees.push(new MangoTree(treeAge, treeHeight, treeMature, treeStatus))
    }else if(treeName == 'MangoTree'){
      this.trees.push(new MangoTree(treeAge, treeHeight, treeMature, treeStatus))
    }else if(treeName == 'AppleTree'){
      this.trees.push(new AppleTree(treeAge, treeHeight, treeMature, treeStatus))
    }else if(treeName == 'PearTree'){
      this.trees.push(new PearTree(treeAge, treeHeight, treeMature, treeStatus))
    }
  }

  showAge(treeName){
    let age_tree = []
    for(let i=0; i<this.trees.length; i++){
      if(this.trees[i]['name'] == treeName){
        age_tree.push(this.trees[i]['_age'])
      }else if(this.trees[i]['treeName'] == treeName){
        age_tree.push(this.trees[i]['_age'])
      }else if(this.trees[i]['treeName'] == treeName){
        age_tree.push(this.trees[i]['_age'])
      }
    }

    if(age_tree.length == 2){
      return `${treeName} there are two trees, one with age ${age_tree[1]} and the other with age ${age_tree[0]}`
    }else{
      return `this age ${age_tree}`
    }
  }

  showTrees(){
    return this.trees
  }

  mature_trees(){
    let mature = []
    for (let i = 0; i < this.trees.length; i++) {
      // console.log('+++',this.trees[i]['_age']);
      // console.log('>>>',this.trees[i]['mature']);
      if(this.trees[i]['_age'] >= this.trees[i]['mature']){
        // console.log('masuk if');
        mature.push(this.trees[i])
      }
    }
    return mature
  }

  dead_trees(){
    let dead = []
    for (var i = 0; i < this.trees.length; i++) {
      if(this.trees[i]['_age'] > this.trees[i]['mature']){
        // console.log('masuk if');
        dead.push(this.trees[i])
      }
    }
    return dead
  }

}

let grove = new TreeGrove()
// input your trees data !
grove.inputTree('MangoTree',3,1.8,7,true)
grove.inputTree('MangoTree',5,2.4,12,true)
grove.inputTree('AppleTree',6,1.2,5,true)
grove.inputTree('PearTree',7,2,15,true)
grove.inputTree('PearTree',14,2,13,true)
//
console.log(`\n======SHOW AGE======`);
console.log(grove.showAge('MangoTree'));
// // next Year
console.log(`\n======CHAPTER======`);
console.log(grove.nextyear());
//
// // show trees age
console.log(`\n======SHOW AGE======`);
console.log(grove.showAge('MangoTree'));
//
// // show trees
console.log(`\n======SHOW ALL TREES======`);
console.log(grove.showTrees());
//
// //show trees
console.log(`\n======MATURE TREE======`);
console.log(grove.mature_trees());
//
// //show trees
console.log(`\n======DEAD TREE======`);
console.log(grove.dead_trees());
