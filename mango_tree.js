class MangoTree {
  // Initialize a new MangoTree
  constructor() {
    this._age = 0,
    this._height = 0,
    this._harvested = 0,
    this.healthyStatus = true,
    this._stopGrowing = 10,
    this._maxAge = 10,
    this._fruits  = []
  }

  getAge() {
    return this._age;
  }
  getHeight() {
    return this._height;
  }
  getFruits() {
    return this.harvested
  }
  getHealtyStatus() {
    return this.healthyStatus
  }

  // Get current states here

  // Grow the tree
  grow() {
    this._age += 1
    if (this._age < this._stopGrowing){
      let random = Math.random() * (1 - 0) + 0
      this._height += random
    }
    if (this._age == this._maxAge){
      this.healthyStatus = false
    }
  }

  // Produce some mangoes
  produceMangoes() {
    //let random = Math.floor(this._age * 1.5)
    for (let i = 0; i < this._age; i++){
      let random = Math.round(Math.random()) // 0 atau 1
      this._fruits.push((new Mango()).quality[random])
    }
  }

  harvest() {
    let qty = Math.floor(Math.random() * 10 ) // mendapatkan sebuah nilai random yang di kalikan 10
    this._harvested = qty
    let good = 0;
    let bad = 0;
    for (let i = 0; i < qty; i++){
      if (this._fruits[i] === 'good'){
        good++
      } else {
        bad++
      }
    }
    //console.log(good)
    this._harvested += ` (${good} good, ${bad} bad)`
  }

}

class Fruit {
  constructor() {
    this.quality = ['good','bad']
  }
}

class Mango extends Fruit {
  // Produce a mango
  constructor() {
    super()
  }
}

// class Pear extends Fruit {
//   constructor() {
//     super()
//   }
// }

let tree = new MangoTree()
tree.grow()
tree.produceMangoes()
// console.log(tree);
// console.log(tree.harvest())
//  console.log(tree._fruits)
do {
  tree.grow();
  tree.produceMangoes();
  tree.harvest();
  console.log(`[Year ${tree._age} Report] Height = ${tree._height.toFixed(1) + ' m'} | Fruits harvested = ${tree._harvested}`)
}
while (tree.healthyStatus != false)
