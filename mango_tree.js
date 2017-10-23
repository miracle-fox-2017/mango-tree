"use strict"

// release 0

class MangoTree {

  // Initialize a new MangoTree
  constructor() {
    this._age = 0;
    this._height = 0;
    this._harvested = 0;
    this.jumlahBuah = 0;
    this.totalBuah = 0;
    this.healthyStatus = true;
  }

  getAge() {
    return this._age;
  }
  getHeight() {
    return this._height;
  }
  getFruits() {
    return this._harvested;
  }
  getHealtyStatus() {
    return this.healthyStatus;
  }


  // Get current states here
  get tree (){
    this._age
  }


  // Grow the tree
  grow() {
    this._age += 1;
    //random Math.floor(Math.random()*(max-min+1)+min);
    //kalau tinggi lebih dari 500...... ga bisa tambah tinggi
    if(this._height > 500){
      this._height += 0;
    } else {
      this._height += Math.floor((Math.random() * (40-20+1)+20));
    }
    //pohon mati diantara umur 20-30 tahun
    if(this._age > Math.floor((Math.random() * (30-20+1)+20))){
      this.healthyStatus = false;
    }
    //if umur >5 berbuah tiap 1 tahun = random 45-70
    if(this._age>5){
      this.jumlahBuah = Math.floor((Math.random() * (70-45+1)+45))
        // this._harvested = Math.floor((Math.random() * (70-45+1)+45))
    }
  }

  // Produce some mangoes
  produceMangoes() {
    // console.log(this.jumlahBuah);
    let panen = new Mango(this.jumlahBuah);
    let good = panen.isQualityGood();
    let result = panen.jumlahBuah + ' (' + good + ' good, ' + (this.jumlahBuah-good) + ' bad)'
    this._harvested = result;
  }

  // Get some fruits
  harverst() {
    this.totalBuah += this.jumlahBuah;
  }

}

class Mango {
  // Produce a mango
  constructor(jumlahBuah) {
    this.jumlahBuah = jumlahBuah;
    this.quality = null;
  }
  
  isQualityGood (){
    if(this.jumlahBuah>0){
      return Math.floor((Math.random() * (this.jumlahBuah-1+1)+1));
    } else {
      return 0;
    }
  }
}


//driver code untuk release 0
console.log('The tree is alive !!');

let mangoTree = new MangoTree();

do {
  mangoTree.grow();
  mangoTree.produceMangoes();
  mangoTree.harverst();
  console.log(`[Year ${mangoTree._age} Report] Height = ${mangoTree._height} cm | Fruits harvested = ${mangoTree._harvested}`)
} while (mangoTree.healthyStatus != false)

console.log('The tree has met its end !!');

// Release 1
class AppleTree extends MangoTree{}
class Apple extends Mango{}

//driver code untuk release 0
console.log('The tree is alive !!');

let appleTree = new AppleTree();

do {
  appleTree.grow();
  appleTree.produceMangoes();
  appleTree.harverst();
  console.log(`[Year ${appleTree._age} Report] Height = ${appleTree._height} cm | Fruits harvested = ${appleTree._harvested}`)
} while (appleTree.healthyStatus != false)

console.log('The tree has met its end !!');

// Release 2
class FruitTree {}
class Fruit {}

// Release 3
class TreeGrove {}
