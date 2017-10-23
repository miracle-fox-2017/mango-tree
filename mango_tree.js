"use strict"

// release 0

class MangoTree {

  // Initialize a new MangoTree
  constructor() {
    this.maxUmur = 40;
    this.maxTinggi = 300;
    this.umur = 0;
    this.tinggi = 0;
    this.maxBuah = 0;
    this.kumpulanBuah = 0;
    this.buahDiPetik = 0;
    this.kesehatan = true;
  }

  getAge() {
    return this.umur
  }
  getHeight() {
    return this.tinggi
  }
  getFruits() {
    return this.kumpulanBuah
  }
  getHealtyStatus() {
    return this.kesehatan
  }


  // Get current states here

  // Grow the tree
  grow() {
    this.umur++
    if (this.umur < this.maxUmur){
      this.kumpulanBuah++
      this.tinggi += Math.floor(Math.random()*9)
    }
    else if(this.umur == this.maxUmur / 2){
      this.maxTinggi = this.tinggi
      return this.maxTinggi
    }

    if (this.umur > this.maxUmur){
      return this.kesehatan = false
    }
  }

  // Produce some mangoes
  produceMangoes() {
  }

  // Get some fruits
  harvest() {
  }

}

class Mango {
  // Produce a mango
  constructor() {
    this.quality = quality
  }
}

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
class AppleTree {}
class Apple {}

// Release 2
class FruitTree {}
class Fruit {}

// Release 3
class TreeGrove {}

let pohonMangga = new MangoTree()
console.log(pohonMangga.grow())
