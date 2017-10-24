"use strict"

// release 0

class MangoTree {

  // Initialize a new MangoTree
  constructor() {
    this.maxUmur = 10;
    this.maxTinggi = 0;
    this.umur = 0;
    this.tinggi = 0;
    this.maxBuah = 20;
    this.kumpulanBuah = [];
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

  grow() {

    if (this.umur < this.maxUmur && this.kesehatan == true){
      this.umur++
      this.tinggi += Math.floor(Math.random()*70)

      if(this.umur < this.maxUmur / 2){
        this.maxTinggi = this.tinggi
      }
    }

    else if (this.umur >= this.maxUmur){
      this.kesehatan = false
    }
  }

  // Produce some mangoes
  produceMangoes() {
    let randomBuah = Math.ceil(Math.random() * this.maxBuah)
    for(var i = 0; i < randomBuah; i++){
      this.kumpulanBuah.push(new Mango())
    }
    console.log(this.kumpulanBuah);
    return this.kumpulanBuah
  }

  // Get some fruits
  harvest() {
    var countBad = 0;
    var countGood = 0;
    for(let i =0; i < this.kumpulanBuah.length; i++){
      if(this.kumpulanBuah[i].quality === 'good'){ // akses array of object
        countGood++
      }
      else {
        countBad++
      }
    }
    return `jumlah buah ${this.kumpulanBuah.length} || (good: ${countGood} : bad: ${countBad})`
  }

}

class Mango {
  constructor() {
    this.quality = this.getQuality()
  }
  getQuality(){
    let randomQuality = Math.floor(Math.random()*2);
    if(randomQuality === 0){
      return 'bad'
    }
    else {
      return 'good'
    }
  }

}


let mangoTree = new MangoTree()
do {
  mangoTree.grow();
  mangoTree.produceMangoes();
  mangoTree.harvest();
  console.log(`[Year ${mangoTree.umur}th Report] Height = ${mangoTree.tinggi} cm | Fruits harvested = ${mangoTree.harvest()}`)
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
