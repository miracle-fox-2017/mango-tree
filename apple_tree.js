"use strict"

let FruitTree = require('./fruit_tree')

class AppleTree extends FruitTree {
  // constructor(fruits,height,age,healt){
    // super()
    // this._age = age
    // this._height = height
    // this._fruits = fruits
    // this._healthyStatus = healt
  // }

  getFruits() {
    if(this._age >= 13){ // mulai tahun ke-13 berbuah sedikit
      this._fruits = Math.ceil(Math.random(0)*4)
    }
    if(this._age > 3 && this._age < 13){ // tahun ke-4 mulai berbuah sampai tahun ke-12
      this._fruits = Math.ceil(Math.random(0)*20)
    }
  }

  getHeight() {
    let randomHeight = Math.random(0)*1
    if(this._age <= 12){ // tinggi bertambah hanya sampai umur 20 tahun
      this._height += randomHeight;
    }
  }

  getHealtyStatus() {
    if(this._age == 15){ // umur ke-15 pohon mati
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
      this._harvested.push(new Apple(grade, quality))
    }
  }

}

class Apple {
  // Produce a apple
  constructor(fruit,status) {
    this.grade = fruit
    this.quality = status
  }
}

//driver code untuk release 0
let appleTree = new AppleTree()
do {
  appleTree.grow();
  appleTree.produceFruit();
  appleTree.harvest();
  console.log(`[Year ${appleTree.age} Report] Height = ${appleTree.height.toFixed(1)} m | Fruits harvested = ${appleTree.harvested}`)
} while (appleTree.healthyStatus != false)


module.exports = AppleTree;
