"use strict"

// release 0

class MangoTree {
  // Initialize a new MangoTree
  constructor() {
    this._age            = 0
    this._height         = 0
    this.fruit_available = []
    this._harvested      = 0
    this.healthyStatus   = true
    this.maximum_age     = 19
  }

  // Get current states here
  heigthRandom(){
    let grow_height = Math.floor(Math.random() * 6 - 1) + 1
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
  produceMangoes() {
    // random jumlah buah per tahun
    // looping push class Mango
    // push ke this.fruit_available = []
    this.fruit_available = []
    let productive_mango_peryear = Math.floor(Math.random() * 33 - 1) + 1
    for(let i=0; i<productive_mango_peryear; i++){
      this.fruit_available.push(new Mango())
    }
    // console.log(this.fruit_available)
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

class Mango {
  // Produce a mango
  constructor() {
    this.quality = this.getQuality()
  }

  getQuality(){
    let randQuality = Math.round(Math.random())

    if(randQuality == 1){
      this.quality = 'good'
    }else{
      this.quality = 'bad'
    }
    return this.quality
  }
}

// driver code untuk release 0
   let mangoTree = new MangoTree()
   console.log('\n============================ MANGGO TREE REPORT =======================\n')
   console.log(`The tree is alive! :smile:`)
   do {
     mangoTree.grow();
     mangoTree.produceMangoes();
     mangoTree.harvest();
     console.log(`[Year ${mangoTree._age} Report] Height = ${mangoTree._height} m | Fruits harvested = ${mangoTree.harvest()}`)
   } while (mangoTree.healthyStatus != false)
   console.log(`The tree has met its end. :sad:`)


// Release 1
class AppleTree {
  constructor() {
    this._age            = 0
    this._height         = 1
    this.fruit_available = []
    this._harvested      = 0
    this.healthyStatus   = true
    this.maximum_age     = 11
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
  produceMangoes() {
    // random jumlah buah per tahun
    // looping push class Mango
    // push ke this.fruit_available = []
    this.fruit_available = []
    let productive_mango_peryear = Math.floor(Math.random() * 13 - 1) + 1
    for(let i=0; i<productive_mango_peryear; i++){
      this.fruit_available.push(new Mango())
    }
    // console.log(this.fruit_available)
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

class Apple {
  constructor() {
    this.quality = this.getQuality()
  }

  getQuality(){
    let randQuality = Math.round(Math.random())

    if(randQuality == 1){
      this.quality = 'good'
    }else{
      this.quality = 'bad'
    }
    return this.quality
  }
}

// driver code untuk release 0
   let appleTree = new AppleTree()
   console.log('\n============================ APPLE TREE REPORT =======================\n')
   console.log(`The tree is alive! :smile:`)
   do {
     appleTree.grow();
     appleTree.produceMangoes();
     appleTree.harvest();
     console.log(`[Year ${appleTree._age} Report] Height = ${appleTree._height} m | Fruits harvested = ${appleTree.harvest()}`)
   } while (appleTree.healthyStatus != false)
   console.log(`The tree has met its end. :sad:`)



// Release 2
class FruitTree {}
class Fruit {}

// Release 3
class TreeGrove {}
