"use strict"

// release 0

class MangoTree {

  // Initialize a new MangoTree
  constructor() {
    this._Age = 0
    this._Height = 0
    this._max_Buah = 0
    this._kumpulan_buah = []
    this._jumlah_Buah = 0
    this._healty = true
    this._harvest = 0
  }

  getAge() {
    return this._Age
  }
  getHeight() {
 return this._Height
  }
  getFruits() {
    return this._kumpulan_buah
  }
  getHealtyStatus() {
    return this._healty
  }


  // Get current states here

  // Grow the tree
  grow() {
    this._Age++
    this._Height += Math.random()*(300 - 200)+ 200
    if(this._Age>=20){
      // this._Age += 0
      this._healty = false
    }


  }

  // Produce some mangoes
  produceMangoes() {
    this._jumlah_Buah = Math.floor( Math.random()*11);
    for (let i = 0;i<this._jumlah_Buah;i++){
      const mango = new Mango()
      this._kumpulan_buah.push(mango.prod)
    }
  }

  // Get some fruits
  harvest() {
    let total = this._jumlah_Buah;
    let good = 0;
    let bad = 0
    for (let i = 0;i<this._kumpulan_buah;i++){
      console.log(this._kumpulan_buah[i])
    }

    return this._kumpulan_buah;
  }

}

class Mango {
  // Produce a mango
  constructor() {
    this._petik = this.petik
  }
  get petik(){
    let prod = ['good','bad']
    let random = Math.floor(Math.random()*2)
    return {manggo: prod[random]}
  }
}

let mangoTree = new MangoTree()
// console.log(mangoTree.produceMangoes());
// console.log(mangoTree.harvest());
 do {
   mangoTree.grow();
   mangoTree.produceMangoes();
  //  mangoTree.harverst();
   console.log(`[Year ${mangoTree._Age} Report] Height = ${mangoTree._Height} | Fruits harvested = ${mangoTree._harvested}`)
 } while (mangoTree._healty != false)
/**
  * driver code untuk release 0
  * let mangoTree = new MangoTree()
  * do {
  *   mangoTree.grow();
  *   mangoTree.produceMangoes();
  *   mangoTree.harverst();
  *   console.log(`[Year ${tree._age} Report] Height = ${tree._height} | Fruits harvested = ${tree._harvested}`)
  * } while (mangoTree.healthyStatus != false)
  */

// Release 1
// class AppleTree {}
// class Apple {}
//
// // Release 2
// class FruitTree {}
// class Fruit {}
//
// // Release 3
// class TreeGrove {}
