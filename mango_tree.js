"use strict"

// release 0

class MangoTree {

  // Initialize a new MangoTree
  constructor() {
    this.maxUmur = 40;
    this.maxTinggi = 0;
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

    if (this.umur < this.maxUmur){
      this.umur++
      // this.kumpulanBuah+= Math.floor(Math.random() *30)
      this.tinggi += Math.floor(Math.random()*15)

      if(this.umur < this.maxUmur / 2){
        this.maxTinggi = this.tinggi
      }
    }

    if (this.umur >= this.maxUmur){
      this.kesehatan = false
    }
  }

  // Produce some mangoes
  produceMangoes() {
    this.kumpulanBuah+= Math.floor(Math.random() *30)
  }

  // Get some fruits
  harvest() {
    this.buahDiPetik = Math.floor(this.kumpulanBuah * 0.75)
  }

}

class Mango {
  // Produce a mango
  constructor() {
    this.quality = quality
  }
}


let mangoTree = new MangoTree()
do {
  mangoTree.grow();
  mangoTree.produceMangoes();
  mangoTree.harvest();
  console.log(`[Year ${mangoTree.umur}th Report] Height = ${mangoTree.tinggi} cm | Fruits harvested = ${mangoTree.buahDiPetik}`)
} while (mangoTree.kesehatan != false)


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
