"use strict"

class FruitTree {
  constructor(){
    this._age = 0;
    this._height = 0;
    this.max_age = 0;
    this.max_height = 0;
    this.healthyStatus = true;
    this._harvested = 0;
    this.fruits = null
  }

  getAge() {
    return this._age
  }
  getHeight() {
    return this._height
  }
  getFruits() {
    return this.fruits.length()
  }
  getHealtyStatus() {
    return this.healthyStatus
  }
  // Grow the tree
  grow() {
    if(this._age <= this.max_age || this._height <= this.max_height){
        this._age++;
        this._height += +((Math.random() * 1.5) + 0).toFixed(1);
    } else {
      this.healthyStatus = false;
    }
    return this
  }
  // Produce some fruits
  produceFruits(fruit) {
    // console.log('------------',fruit);
    this.fruits = []
    let perDay = Math.floor((Math.random() * 10) + 2);
    for (var idx = 0; idx < perDay; idx++) {
      // if (fruit === 'mango') {
          this.fruits.push(new fruit())
      // }

    }
    // console.log('------------------',this.fruits);
    this._harvested = this.fruits.length
    return this.fruits
  }

  // Get some fruits
  harvest() {
    let good = 0;
    let bad = 0;
    this.fruits.forEach(dataFruits=>{
      if(dataFruits.quality === 'good'){
        good++
      } else {
        bad++
      }
    })
    // console.log(good);
    return `(${good} good, ${bad} bad)`;
  }

}
class Fruit {
  constructor() {
    this.quality = this.getQuality()
  }

  getQuality(){
    let quality = Math.round(Math.random())
    if(quality === 0){
      quality = 'good'
    } else {
      quality = 'bad'
    }
    return quality
  }
}
//BUAG MANGGA
class MangoTree extends FruitTree {
  constructor(){
    super()
    this.max_age = 20;
    this.max_height = 10;
  }


}

class Mango extends Fruit {
  constructor(){
    super()
  }
}

//BUAH APEL
class AppleTree extends FruitTree {
  constructor(){
    super()
    this.max_age = 10;
    this.max_height = 7;
  }

}
class Apple extends Fruit{
  constructor(){
    super()
  }
}

//BUAH PEER
class PearTree extends FruitTree {
  constructor(){
    super()
    this.max_age = 15;
    this.max_height = 13;
  }
}
class Pear extends Fruit{
  constructor(){
    super()
  }
}

let mangoTree = new MangoTree()
let appleTree = new AppleTree()
let pearTree = new PearTree()
console.log('---------------------------POHON MANGGA-----------------------------------------');
do {
  mangoTree.grow();
  mangoTree.produceFruits(Mango);
  // mangoTree.harvest();
  console.log(`[Year ${mangoTree._age} Report] Height = ${mangoTree._height} | Fruits harvested = ${mangoTree._harvested} ${mangoTree.harvest()}`)
} while (mangoTree.healthyStatus !== false)
console.log('--------------------------------------------------------------------------------');
console.log('---------------------------POHON APEL-------------------------------------------');
do {
  appleTree.grow();
  appleTree.produceFruits(Apple);
  appleTree.harvest();
  console.log(`[Year ${appleTree._age} Report] Height = ${appleTree._height} | Fruits harvested = ${appleTree._harvested} ${appleTree.harvest()}`)
} while (appleTree.healthyStatus !== false)
console.log('--------------------------------------------------------------------------------');
console.log('---------------------------POHON PEER-------------------------------------------');
do {
  pearTree.grow();
  pearTree.produceFruits(Pear);
  pearTree.harvest();
  console.log(`[Year ${pearTree._age} Report] Height = ${pearTree._height} | Fruits harvested = ${pearTree._harvested} ${pearTree.harvest()}`)
} while (pearTree.healthyStatus !== false)
console.log('--------------------------------------------------------------------------------');
// Release 3
class TreeGrove {

}
