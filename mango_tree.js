"use strict"

// release 0

class FruitTree {

  // Initialize a new MangoTree
  constructor(name, age, height,berbuah, healthyStatus) {
    this._name = name
    this._age = age
    this._height = height
    this._max_capacity = 0
    this._produksi = []
    this._harvested = ''
    this._healthyStatus = healthyStatus
    this._stopGrowing = 0
    this._batasUmur = 0
    this._startBuah = berbuah
  }

  getAge() {
    return this._age
  }
  getHeight() {
    return this._height
  }
  getFruits() {
    return this._harvested
  }
  getHealtyStatus() {
    return this._healthyStatus
  }


  // Get current states here

  // Grow the tree
  grow() {
    this._age++
    if(this._age < this._stopGrowing){

      let random = Math.random()
      this._height += random
    }
    if(this._age >= this._batasUmur){
      this._healthyStatus = false
     }
  }

  // Produce some mangoes
  produceFruit() {

    if(this._age > this._startBuah){
    let buah  = Math.floor(Math.random() * this._max_capacity)
    if(buah < this._max_capacity){
      for(let i =0; i < buah; i++){
        this._produksi.push(new Fruit())
      }
    }
  }

}


  // Get some fruits
  harvest() {

    let good = 0
    let bad = 0

    for(let i =0; i < this._produksi.length; i++){
      if(this._produksi[i].quality === 'good'){
        good++
      }else{
        bad++
      }
    }
    this._harvested = `${this._produksi.length} ${good} good ${bad} bad`
      return this._harvested
  }



}




class MangoTree extends FruitTree {
  // Produce a mango
  constructor(name, age, height, berbuah, healthyStatus) {
    super(name, age, height, berbuah, healthyStatus)
    this._max_capacity = 11
    this._stopGrowing = 7
    this._batasUmur = 10

  }


}

class Fruit {
  constructor(){
    this.quality = this.kualitas()
  }
  kualitas(){
    let arr = ['good', 'bad']

    let random = Math.round(Math.random())
    return(random == 0)? 'good':'bad'
  }
}

class Mango extends Fruit {
  // Produce a mango
  constructor (){
    super()
  }

}


class AppleTree extends FruitTree  {
  constructor(name, age, height, berbuah, healthyStatus) {
    super(name, age, height, berbuah, healthyStatus)
    this._max_capacity = 10
    this._stopGrowing = 7
    this._batasUmur = 9

  }
 }

 class Apple extends Fruit {
   constructor() {
     super ()
   }

 }

 class PearTree extends FruitTree  {
   constructor(name, age, height, berbuah, healthyStatus) {
     super(name, age, height, berbuah, healthyStatus)
     this._max_capacity = 10
     this._stopGrowing = 6
     this._batasUmur = 9

   }
  }

  class Pear extends Fruit {
    constructor() {
      super ()
    }

  }




let mangoTree = new MangoTree('MangoTree', 0, 1.7, 2, true)
console.log('============================ Mango Tree Growth ================================');
console.log('The Mangoo Tree Is Alive!');
//console.log(mangoTree.produceFruit(4));console.log(mangoTree.harvest());
do {
  mangoTree.grow();
  mangoTree.produceFruit();
  mangoTree.harvest();
  console.log(`[Year ${mangoTree._age} Report] Height = ${mangoTree._height} M | Fruits harvested = ${mangoTree._harvested}`)
} while (mangoTree._healthyStatus != false)
console.log(`The tree has met its end. :sad:`);



// // Release 1
let appleTree = new AppleTree('AppleTree', 1, 1.7, 4, true)
console.log('============================ Apple Tree Growth ================================');
console.log('The Apple Tree Is Alive!');

do {
  appleTree.grow();
  appleTree.produceFruit();
  appleTree.harvest();
  console.log(`[Year ${appleTree._age} Report] Height = ${appleTree._height} M | Fruits harvested = ${appleTree._harvested}`)
} while (appleTree._healthyStatus != false)
console.log(`The tree has met its end. :sad:`);

let pearTree = new PearTree('PearTree', 2, 1, 2,true)
console.log('============================ Pear Tree Growth ================================');
console.log('The Pear Tree Is Alive!');

do {
  pearTree.grow();
  pearTree.produceFruit();
  pearTree.harvest();
  console.log(`[Year ${pearTree._age} Report] Height = ${pearTree._height} M | Fruits harvested = ${pearTree._harvested}`)
} while (pearTree._healthyStatus != false)
console.log(`The tree has met its end. :sad:`);



 // Release 3
 class TreeGrove {
   constructor(){
     this.treesArr = []
   }
  inputTree(name, age, height, berbuah,healthyStatus){
    let tree = ''
    if(name === 'MangoTree'){
      tree = new MangoTree(name, age, height, berbuah, healthyStatus)
      this.treesArr.push(tree)
    }else if(name === 'AppleTree'){
      tree = new AppleTree(name, age, height, berbuah, healthyStatus)
      this.treesArr.push(tree)
    }
    else{
      tree = new PearTree(name, age, height, berbuah, healthyStatus)
      this.treesArr.push(tree)
    }
    return this.treesArr
  }

  nextYear(){
    for(let i =0; i < this.treesArr.length;i++){
      this.treesArr[i].grow()
      this.treesArr[i].produceFruit()
      this.treesArr[i].harvest()
    }
  }
  showAges (){
    for(let i =0; i < this.treesArr.length; i++){
      console.log('Umur ' + this.treesArr[i]._age)
    }
  }

  matureTrees(){
    for(let i =0; i < this.treesArr.length; i++){
      if(this.treesArr[i]._produksi.length > 0){
        console.log('Pohon Yang berbuah '+ this.treesArr[i]._name);
      }
    }
  }
  showTrees(){
    for(let i =0; i < this.treesArr.length; i++){
      console.log(this.treesArr[i])
    }
  }

  deadTrees(){
    for(let i =0; i < this.treesArr.length; i++){
      if(this.treesArr[i]._healthyStatus == false){
        console.log('Pohon Yang Mati ' + this.treesArr[i]._name);
      }
    }
  }


 }


 var grove = new TreeGrove()
 grove.inputTree('MangoTree', 2,2,8,7,true)
 grove.inputTree('AppleTree', 4,2.4,12,true)
 grove.inputTree('PearTree', 1,1.2,8,true)

grove.nextYear()
grove.nextYear()
grove.nextYear()
grove.nextYear()
grove.nextYear()


grove.showAges()
grove.showTrees()
grove.matureTrees()
grove.deadTrees()
