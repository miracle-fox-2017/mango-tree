"use strict"

// release 0

class FruitTree {

  // Initialize a new MangoTree
  constructor() {
    this.umur = 0;
    this.tinggi = 0;
    this.maxUmur = 20;
    this.maxTinggi = 10;
    this.maxBuah = 20;
    this.kumpulanBuah = [];
    this.jmlBuah = 0;
    this.healthyStatus = true;
  }

  grow() {
    if(this.umur === this.maxUmur){
      this.healthyStatus = false;
    }
    if(this.tinggi < this.maxTinggi){
      this.tinggi += Math.ceil(Math.random() * this.maxTinggi);
    }
    
    this.umur += 1
  }

  // Produce some mangoes
  produceMangoes() { 
    this.kumpulanBuah = [];
    this.jmlBuah = Math.ceil(Math.random() * this.maxBuah);
    for (let i = 0; i < this.jmlBuah; i++) {
      let manggo = new Mango();
      this.kumpulanBuah.push(manggo.getQuality());
    }
  }

  // Get some fruits
  harverst() {
    let countBad = 0;
    let countGood = 0;
    for(let i = 0;i < this.kumpulanBuah.length;i++){
      if (this.kumpulanBuah[i]==='Good'){
        countGood++
      }else{
        countBad++
      }
    }
    return `${this.jmlBuah} | Good ${countGood} | Bad ${countBad}`;
  }

}

class Mango {
  // Produce a mango
  constructor() {
    this.quality = null;
  }

  getQuality(){
    let random = Math.ceil(Math.random()*2);
    if (random==1){
      return 'Bad';
    }else{
      return 'Good';
    }
  }

}

class AppleTree extends FruitTree {

}

class MangoTree extends FruitTree {

}

/**
  * driver code untuk release 0
**/
let mangoTree = new MangoTree()
do {
mangoTree.grow();
mangoTree.produceMangoes();
  console.log(`[Year ${mangoTree.umur} Report] Height = ${mangoTree.tinggi} m | Fruits harvested = ${mangoTree.harverst()}`)
} while (mangoTree.healthyStatus != false)
console.log();
// // Release 1
// class AppleTree {}
// class Apple {}

// // Release 2
// class FruitTree {}
// class Fruit {}

// // Release 3
// class TreeGrove {}
