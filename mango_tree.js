"use strict"

// release 0
class FruitTree {
  constructor(name, age, height, fruitMaks, harvested, healthyStatus, ageMax, stopAge){
    this._name = name
    this._age = age
    this._height = height
    this.fruitMaks = fruitMaks
    this.fruitSum = []
    this._harvested = harvested
    this.healthyStatus = healthyStatus
    this.ageMax = ageMax
    this.stopAge = stopAge
  }

  getAge() {
    this._age++
  }

  getHeight() {
    this._height += parseFloat(((Math.random() * 1) + 0).toPrecision(1))
  }

  getFruits() {
    let fruitCount = Math.floor((Math.random() * this.fruitMaks) + 1)
    for(let i=0; i<fruitCount; i++){
      let quality = Math.floor((Math.random() * 2) + 0)
      if(quality === 1){
        this.fruitSum[i] = new Fruit('Good')  
      }else{
        this.fruitSum[i] = new Fruit('Bad')
      }
    }
  }

  getHealtyStatus(status) {
    this.healthyStatus = status
  }
  // Get current states here

  // Grow the tree
  grow() {

    this.getAge()
    if(this._age<=this.stopAge){
      this.getHeight()       
    }

    if(this._age === this.ageMax){
      this.getHealtyStatus(false)
    } 
  }

  // Produce some mangoes
  produceFruits() {
    this.fruitSum = []
    this.getFruits()
  }

  // Get some fruits
  harvest() {

    let good = this.fruitSum.filter((fruit) =>{
      return fruit.quality === 'Good'
    })

    let bad = this.fruitSum.filter((fruit) =>{
      return fruit.quality === 'Bad'
    })

    this._harvested = this.fruitSum.length+'('+good.length+' good, '+bad.length+' bad)'
  }
}

class Fruit{
  constructor(quality){
    this.quality = quality
  }
}


class MangoTree extends FruitTree {

  // Initialize a new MangoTree
  constructor(name, age, height, fruitMaks, harvested, healthyStatus, ageMax, stopAge) {
    super(name, age, height, fruitMaks, harvested, healthyStatus, ageMax, stopAge)
  }
}

class AppleTree extends FruitTree {
 constructor(name, age, height, fruitMaks, harvested, healthyStatus, ageMax, stopAge) {
    super(name, age, height, fruitMaks, harvested, healthyStatus, ageMax, stopAge)
  } 
}

class PeachTree extends FruitTree {
 constructor(name, age, height, fruitMaks, harvested, healthyStatus, ageMax, stopAge) {
    super(name, age, height, fruitMaks, harvested, healthyStatus, ageMax, stopAge)
  } 
}
   // driver code untuk release 0
//    let mangoTree = new MangoTree('mangga', 0, 0.1, 10, 0, true, 15, 10)
//    // console.log(mangoTree);
//    // console.log(mangoTree.produceFruits());
//    console.log('The tree is alive !');
//    do {
//      mangoTree.grow()
//      mangoTree.produceFruits()
//      mangoTree.harvest()
//      console.log(`[Year ${mangoTree._age} Report] Height = ${mangoTree._height} | ${mangoTree._name} harvested = ${mangoTree._harvested}`)
//    } while (mangoTree.healthyStatus != false)

//    console.log('The tree has met its end');
  

// // Release 1


// let appleTree = new AppleTree('apel', 0, 0.1, 10, 0, true, 18, 15)

//   console.log('The tree is alive');
//    do {
//      appleTree.grow()
//      appleTree.produceFruits()
//      appleTree.harvest()
//      console.log(`[Year ${appleTree._age} Report] Height = ${appleTree._height} | ${appleTree._name} harvested = ${appleTree._harvested}`)
//    } while (appleTree.healthyStatus != false)
//    console.log('The tree has met its end');

// // Release 2
// let peachTree = new PeachTree('pear', 0, 0.1, 12, 0, true, 20, 15)

//   console.log('The tree is alive');
//    do {
//      peachTree.grow()
//      peachTree.produceFruits()
//      peachTree.harvest()
//      console.log(`[Year ${peachTree._age} Report] Height = ${peachTree._height} | ${peachTree._name} harvested = ${peachTree._harvested}`)
//    } while (peachTree.healthyStatus != false)
//    console.log('The tree has met its end');

// Release 3
class TreeGrove {
  constructor(){
    this.TreeGrove = []
  }

  inputTree(name, age, height, stopAge, healthyStatus){

    if(name === 'AppleTree'){
      this.TreeGrove.push(new AppleTree('apel', age, height, 10, 0, healthyStatus, 18, 15))
    }

    if(name === 'MangoTree'){
      this.TreeGrove.push(new MangoTree('mangga', age, height, 10, 0, healthyStatus, 15, 10))
    }

    if(name === 'PeachTree'){
      this.TreeGrove.push(new PeachTree('pear', age, height, 12, 0, healthyStatus, 20, 15))
    }

    console.log(this.TreeGrove);
  }

  show_ages(){
    this.TreeGrove.forEach(batang =>{
      console.log('pohon'+batang._name+' : '+batang._age+' tahun');
    })
  }

  show_trees(){
    this.TreeGrove.forEach(batang =>{
      console.log(batang._name);
    })
  }

  mature_trees(){
    let maturetree = this.TreeGrove.filter(batang =>{
      return batang.healthyStatus === true
    })
  
  return maturetree
  }

  dead_trees(){
    let deadtree = this.TreeGrove.filter(batang =>{
      return batang.healthyStatus === false
    })

    return deadtree
  }

  nextYear(){
    this.TreeGrove.forEach(batang =>{
      batang.grow()
      batang.produceFruits()
      batang.harvest()
      console.log(`[Year ${batang._age} Report] Height = ${batang._height} | ${batang._name} harvested = ${batang._harvested}`)
    })
  }
}

let grove =  new TreeGrove()

grove.inputTree('MangoTree', 3, 1.8, 7, true)

grove.nextYear()
grove.show_ages()
grove.show_trees()
console.log(grove.mature_trees());
console.log(grove.dead_trees());