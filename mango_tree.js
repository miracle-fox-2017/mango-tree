"use strict"

// FruitTree
class FruitTree {
  constructor(name,age,height,startFruit,healthyStatus){
    this.name = name
    this.maxAge = 20;
    this.age = age;
    this.height = height;
    this.startFruit = startFruit;
    this.addedHeight = 2
    this.maxFruits = 100;
    this.fruits = []
    this.harvested = 0;
    this.healthyStatus = healthyStatus
  }

  getAge() {
    if(this.maxAge === this.age){
      this.healthyStatus = false
    }
  }

  getHeight() {
    this.height+=this.addedHeight
    this.addedHeight = Math.random()*this.addedHeight;
  }

  getFruits() {
    this.fruits.push(Math.floor(Math.random()*this.maxFruits+1))
  }

  getHealtyStatus() {
  }

  grow() {
    this.age++
    this.getAge();
    this.getHeight();
  }

  produceMangoes() {
    if(this.startFruit <= this.age){
      this.getFruits()
    }
  }

  harvest() {
    let goodFruits = 0;
    let badFruits = 0
    for(let i = 0; i < this.fruits.length; i++){
      this.harvested = Math.floor(Math.random()*this.fruits[i]+1)
    }
    goodFruits = Math.floor(Math.random()*this.harvested)
    badFruits = this.harvested - goodFruits
    this.harvested = {
      harvest: this.harvested,
      goodFruits: goodFruits,
      badFruits: badFruits
    }
    this.harvested = `${this.harvested.harvest} (Good Fruits: ${this.harvested.goodFruits} || Bad Fruits: ${this.harvested.badFruits})`
  }
}


// MangoTree
class MangoTree extends FruitTree {
  constructor(name,age,height,startFruit,healthyStatus) {
    super()
    this.name = name
    this.age = age;
    this.height = height;
    this.startFruit = startFruit;
    this.healthyStatus = healthyStatus
  }
}


// AppleTree
class AppleTree extends FruitTree {
  constructor(name,age,height,startFruit,healthyStatus){
    super()
    this.name = name
    this.age = age;
    this.height = height;
    this.startFruit = startFruit;
    this.healthyStatus = healthyStatus
  }
}


// PearTree
class PearTree extends FruitTree {
  constructor(name,age,height,startFruit,healthyStatus){
    super()
    this.name = name
    this.age = age;
    this.height = height;
    this.startFruit = startFruit;
    this.healthyStatus = healthyStatus
  }
}


// Calling FruitTree
let fruitTree = new FruitTree()

// Calling AppleTree
let appleTree = new AppleTree('AppleTree',0,0,0,true)
console.log(`The Apple Tree is Alive!`);
do {
  appleTree.grow();
  appleTree.produceMangoes();
  appleTree.harvest();
  console.log(`[Year ${appleTree.age} Report] Height = ${appleTree.height.toFixed(2)} | Fruits harvested = ${appleTree.harvested}`)
} while (appleTree.healthyStatus != false)

// Calling MangoTree
let mangoTree = new MangoTree('MangoTree',0,0,0,true)
console.log(`The Mango Tree is Alive!`);
do {
  mangoTree.grow();
  mangoTree.produceMangoes();
  mangoTree.harvest();
  console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height.toFixed(2)} | Fruits harvested = ${mangoTree.harvested}`)
} while (mangoTree.healthyStatus != false)

// Calling PearTree
let pearTree = new PearTree('PearTree',0,0,0,true)
console.log(`The Pear Tree is Alive!`);
do {
  pearTree.grow();
  pearTree.produceMangoes();
  pearTree.harvest();
  console.log(`[Year ${pearTree.age} Report] Height = ${pearTree.height.toFixed(2)} | Fruits harvested = ${pearTree.harvested}`)
} while (pearTree.healthyStatus != false)

// Release 3
class TreeGrove {
  constructor(){
    this.input = []
  }

  inputTree(name,age,height,startFruit,healthyStatus){
    let tree = ''
    if(name === 'MangoTree'){
      tree = new MangoTree(name,age,height,startFruit,healthyStatus);
      this.input.push(tree)
    }
    else if(name === 'AppleTree'){
      tree = new AppleTree(name,age,height,startFruit,healthyStatus);
      this.input.push(tree)
    }
    else{
      tree = new PearTree(name,age,height,startFruit,healthyStatus);
      this.input.push(tree)
    }
    return tree
  }

  showAges(){
    let arrAge = [];
    for(let i = 0; i < this.input.length; i++){
      arrAge.push(this.input[i].age);
    }
    return arrAge
  }

  showTrees(){
    let arrTrees = [];
    for(let i = 0; i < this.input.length; i++){
      arrTrees.push(this.input[i].name)
    }
    return arrTrees
  }

  mature_trees(){
    let arrTrees = [];
    for(let i = 0; i < this.input.length; i++){
      if(this.input[i].startFruit >= this.input[i].age){
        arrTrees.push(this.input[i].name)
      }
    }
    return arrTrees
  }

  dead_trees(){
    let arrTrees = [];
    for(let i = 0; i < this.input.length; i++){
      if(this.input[i].healthyStatus !== true){
        arrTrees.push(this.input[i].name)
      }
    }
    return arrTrees
  }
}

let grove = new TreeGrove();
grove.inputTree('MangoTree',3,1,2,true)
grove.inputTree('MangoTree',3,1,12,true)
grove.inputTree('AppleTree',4,1,10,true)
grove.inputTree('PearTree',3,1,5,false)
console.log(grove.showTrees());
console.log(grove.mature_trees());
console.log(grove.dead_trees());
