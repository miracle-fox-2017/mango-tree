"use strict"

let FruitTree = require('./fruit_tree')

class PearTree extends FruitTree {
  // constructor(fruits,height,age,healt){
    // super()
    // this._age = age
    // this._height = height
    // this._fruits = fruits
    // this._healthyStatus = healt
  // }

  getFruits() {
    if(this._age >= 9){ // mulai tahun ke-9 berbuah sedikit
      this._fruits = Math.ceil(Math.random(0)*3)
    }
    if(this._age > 3 && this._age < 9){ // tahun ke-4 mulai berbuah sampai tahun ke-8
      this._fruits = Math.ceil(Math.random(0)*20)
    }
  }

  getHeight() {
    let randomHeight = Math.random(0)*1
    if(this._age <= 9){ // tinggi bertambah hanya sampai umur 20 tahun
      this._height += randomHeight;
    }
  }

  getHealtyStatus() {
    if(this._age == 10){ // umur ke-10 pohon mati
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
      this._harvested.push(new Pear(grade, quality))
    }
  }

}

class Pear {
  // Produce a pear
  constructor(fruit,status) {
    this.grade = fruit
    this.quality = status
  }
}

//driver code untuk release 0
let pearTree = new PearTree()
do {
  pearTree.grow();
  pearTree.produceFruit();
  pearTree.harvest();
  console.log(`[Year ${pearTree.age} Report] Height = ${pearTree.height.toFixed(1)} m | Fruits harvested = ${pearTree.harvested}`)
} while (pearTree.healthyStatus != false)

module.exports = PearTree;
