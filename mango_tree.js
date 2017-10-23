"use strict"

let FruitTree = require('./fruit_tree')

class MangoTree extends FruitTree {
  // constructor(fruits,height,age,healt){
    // super()
    // this._age = age
    // this._height = height
    // this._fruits = fruits
    // this._healthyStatus = healt
  // }

  getFruits() {
    if(this._age >= 24){ // tahun ke-24 tidak berbuah
      this._fruits = Math.ceil(Math.random(0)*5)
    }
    if(this._age > 2 && this._age < 24){ // tahun ke-2 mulai berbuah sampai tahun ke-23
      this._fruits = Math.ceil(Math.random(0)*30)
    }
  }

  getHeight() {
    let randomHeight = Math.random(0)*2
    if(this._age <= 20){ // tinggi bertambah hanya sampai umur 20 tahun
      this._height += randomHeight;
    }
  }

  getHealtyStatus() {
    if(this._age == 25){ // umur ke-25 pohon mati
      this._healthyStatus = false
    }
  }

  harvest() { // memulai harvest dan memisahkan antara kualitas good dan bad
    let quality
    for (var i = 0; i < this._fruits; i++) {
      let grade = Math.ceil(Math.random(0)*10)
      if(grade <= 5){
        quality = 'bad'
        this._quality.push('bad')
      }else{
        quality = 'good'
        this._quality.push('good')
      }
      this._harvested.push(new Mango(grade, quality))
    }
  }

}

class Mango {
  // Produce a mango
  constructor(fruit,status) {
    this.grade = fruit
    this.quality = status
  }
}

//driver code untuk release 0
let mangoTree = new MangoTree()
do {
  mangoTree.grow();
  mangoTree.produceFruit();
  mangoTree.harvest();
  console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height.toFixed(1)} m | Fruits harvested = ${mangoTree.harvested}`)
} while (mangoTree.healthyStatus != false)

module.exports = MangoTree;
