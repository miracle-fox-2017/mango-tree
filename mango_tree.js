"use strict"

// Release 2
// fruit tree class inheritance
class FruitTree {
  constructor(name,age,height,status,max_age) {
    this.name            = name
    this._age            = age
    this._height         = height
    this.fruit_available = []
    this._harvested      = 0
    this.healthyStatus   = status
    this.maximum_age     = max_age
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
    let fruit = new newFruit()
    // console.log('>>>>>', param_fruit);

    this.fruit_available = []
    let productive_fruit_peryear = Math.floor(Math.random() * 13 - 1) + 1
    for(let i=0; i<productive_fruit_peryear; i++){
      this.fruit_available.push(fruit)
    }
    // console.log('======fruit available====>>>',this.fruit_available)
    return this.fruit_available

  }

  // Get some fruits
  harvest() {
    let goodQuality = 0
    let badQuality  = 0

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
  constructor(){
    super('MangoTree', 0, 5, true, 19 )
  }

  produceMangoes(){
    super.produceFruits( Mango);
  }
}

class AppleTree extends FruitTree{
  constructor(){
    super('AppleTree', 0, 1, true, 11 )
  }

  produceApples(){
    super.produceFruits( Apple);
  }
}

class PearTree extends FruitTree{
  constructor(){
    super('AppleTree', 0, 3, true, 16 )
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
    let randQuality = Math.floor(Math.random())
    // console.log(randQuality);
    if(randQuality === 1){
      this.quality = 'good'
    }else{
      this.quality = 'bad'
    }
    // console.log('<<<<<< ',this.quality);
    return this.quality
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

// console.log('-------------', mangoTree['fruit_available']);


console.log('\n============================ MANGGO TREE REPORT =======================\n')
   console.log(`The tree is alive! :smile:`)
   do {
     mangoTree.grow();
     mangoTree.produceMangoes();
     mangoTree.harvest();
     console.log(`[Year ${mangoTree._age} Report] Height = ${mangoTree._height} m | Fruits harvested = ${mangoTree.harvest()}`)
   } while (mangoTree.healthyStatus != false)
console.log(`The tree has met its end. :sad:`)

console.log('\n============================ APPLE TREE REPORT =======================\n')
   console.log(`The tree is alive! :smile:`)
   do {
     appleTree.grow();
     appleTree.produceApples();
     appleTree.harvest();
     console.log(`[Year ${appleTree._age} Report] Height = ${appleTree._height} m | Fruits harvested = ${appleTree.harvest()}`)
   } while (appleTree.healthyStatus != false)
   console.log(`The tree has met its end. :sad:`)

console.log('\n============================ PEAR TREE REPORT =======================\n')
console.log(`The tree is alive! :smile:`)
  do {
    pearTree.grow();
    pearTree.producePears();
    pearTree.harvest();
    console.log(`[Year ${pearTree._age} Report] Height = ${pearTree._height} m | Fruits harvested = ${pearTree.harvest()}`)
  } while (pearTree.healthyStatus != false)
console.log(`The tree has met its end. :sad:`)


// Release 3
// class TreeGrove {}
