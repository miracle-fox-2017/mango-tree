"use strict"

class FruitTree {
  constructor(age, height, mature, healthyStatus){
    this.name = 'Fruit'
    this._age = age || 0;
    this._height = height || 0;
    this.mature = mature;
    this.max_age = 0;
    this.max_height = 0;
    this.healthyStatus = healthyStatus ||  true;
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
    return this.fruits.length
  }
  getHealtyStatus() {
    return this.healthyStatus
  }
  // Grow the tree
  grow() {
    // console.log(this.mature);
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
    this.fruits = []
    let perDay = Math.floor((Math.random() * 10) + 2);
    for (var idx = 0; idx < perDay; idx++) {
      this.fruits.push(new fruit())
    }
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
  constructor(age, height, mature, healthyStatus){
    super(age, height, mature, healthyStatus)
    this.name = 'Mango'
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
  constructor(age, height, mature, healthyStatus){
    super(age, height, mature, healthyStatus)
    this.name = 'Apple'
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
  constructor(age, height, mature, healthyStatus){
    super(age, height, mature, healthyStatus)
    this.name = 'Fruit'
    this.max_age = 15;
    this.max_height = 13;
  }
}
class Pear extends Fruit{
  constructor(){
    super()
  }
}


// let mangoTree = new MangoTree();
// let appleTree = new AppleTree();
// let pearTree = new PearTree();
//
//
// console.log('---------------------------POHON MANGGA-----------------------------------------');
// do {
//   mangoTree.grow();
//   mangoTree.produceFruits(Mango);
//   mangoTree.harvest();
//   console.log(`[Year ${mangoTree._age} Report] Height = ${mangoTree._height} m | Fruits harvested = ${mangoTree._harvested} ${mangoTree.harvest()}`)
// } while (mangoTree.healthyStatus !== false)
//
// console.log('--------------------------------------------------------------------------------');
// console.log('---------------------------POHON APEL-------------------------------------------');
// do {
//   appleTree.grow();
//   appleTree.produceFruits(Apple);
//   appleTree.harvest();
//   console.log(`[Year ${appleTree._age} Report] Height = ${appleTree._height} m | Fruits harvested = ${appleTree._harvested} ${appleTree.harvest()}`)
// } while (appleTree.healthyStatus !== false)
//
// console.log('--------------------------------------------------------------------------------');
// console.log('---------------------------POHON PEER-------------------------------------------');
// do {
//   pearTree.grow();
//   pearTree.produceFruits(Pear);
//   pearTree.harvest();
//   console.log(`[Year ${pearTree._age} Report] Height = ${pearTree._height} m | Fruits harvested = ${pearTree._harvested} ${pearTree.harvest()}`)
// } while (pearTree.healthyStatus !== false)
//
// console.log('--------------------------------------------------------------------------------');


//RELEASE 3
class TreeGrove {
  constructor(){
    this.dataTrees = []
  }
  inputTree(nameTree, age, height, mature, status){
    if(nameTree === 'MangoTree'){
      this.dataTrees.push(new MangoTree(age, height, mature, status))
    } else if(nameTree == 'AppleTree'){
      this.dataTrees.push(new AppleTree(age, height, mature, status))
    } else if(nameTree == 'PearTree'){
      this.dataTrees.push(new PearTree(age, height, mature, status))
    } else {
      console.log('Tidak ada Pohon itu');
    }
  }

  show_ages(name){
    let getAge = []
    this.dataTrees.forEach(trees=>{
      // console.log('-----------',trees);
      if(trees.name === name){
        getAge.push(trees._age)
      } else if(trees.name === name){
        getAge.push(trees._age)
      } else if(trees.name === name){
        getAge.push(trees._age)
      }
    })
    return 'Tahun ke = '+getAge.join('')
  }

  nextYear() {
    let result = []
    this.dataTrees.forEach( listTrees=>{
      result.push(listTrees.grow())
    })
    return 'Tahun bertambah'
  }

  show_trees(){
    return this.dataTrees
  }
  mature_trees(){
    let dataMature = []
    this.dataTrees.forEach(trees=>{
        if(trees._age >= trees.mature){
        dataMature.push(trees)
      }
    })
    return dataMature
  }
  dead_trees(){
    let deadTrees = []
    this.dataTrees.forEach(trees => {
      if(trees._age > trees.mature){
        deadTrees.push(trees)
      }
    })
    return deadTrees
  }
}
// END RELEASE 3
//Matikan Drive Code release 2 untuk menjalankan Drive code ini

let grove = new TreeGrove()
grove.inputTree('MangoTree', 3, 1.8, 7, true)
// console.log(grove);
// grove.inputTree('MangoTree', 5, 2.4, 12, true)
// grove.inputTree('AppleTree', 4, 1.2, 5, true)
// grove.inputTree('PearTree', 7, 2, 15, true)
console.log(grove.nextYear());
console.log(grove.nextYear());
console.log(grove.nextYear());
console.log(grove.nextYear());
console.log(grove.nextYear());
console.log(grove.nextYear());
console.log(grove.nextYear());
console.log(grove.nextYear());
console.log(grove.nextYear());
console.log(grove.nextYear());
console.log(grove.nextYear());
console.log(grove.nextYear());
console.log(grove.nextYear());
console.log(grove.nextYear());
console.log(grove.nextYear());
console.log(grove.nextYear());
console.log(grove.nextYear());
console.log(grove.nextYear());
console.log(grove.nextYear());
console.log(grove.nextYear());
console.log(grove.nextYear());
console.log(grove.nextYear());
console.log(grove.nextYear());
console.log(grove.nextYear());
console.log(grove.nextYear());
console.log(grove.nextYear());
console.log(grove.nextYear());
console.log(grove.nextYear());
console.log(grove.nextYear());

console.log(grove.show_ages('Mango'));
console.log(grove.show_trees());
console.log("Mature Trees: ");
console.log(grove.mature_trees());
