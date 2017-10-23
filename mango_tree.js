"use strict"

// release 0

class MangoTree {

  // Initialize a new MangoTree
  constructor() {
    this.umur = 0;
    this.tinggi = 0;
    this.max = 0;
    this.kumpulanBuah = 0;
    this.buahPetik = 0;
    this.healthy = true;
  }

  getAge() {
    return this.umur;
  }
  getHeight() {
    return this.tinggi;
  }
  getFruits() {
    return this.kumpulanBuah;
  }
  getHealtyStatus() {
    return this.healthy;
  }


  // Get current states here

  // Grow the tree
  grow() {
    debugger;
      if(this.umur === 20) {
        this.healthy = false;
      } else {
        this.umur = this.umur + 1;
      }

      if(this.tinggi < 5) {
        this.tinggi = this.tinggi + 1;
      }
  }

  // Produce some mangoes
  produceMangoes() {
    let angka = '123456789';
    let random = Math.ceil(Math.random() * angka.length -1);

    this.kumpulanBuah = this.kumpulanBuah + Number(angka[random]);
  }

  // Get some fruits
  harvest() {

  }

}


class Mango {

  constructor(quality) {
    this.kualitas = quality;
  }
}


 // driver code untuk release 0
 let mangoTree = new MangoTree()
 do {
   mangoTree.grow();
   mangoTree.produceMangoes();
  //  mangoTree.harverst();
   console.log(`[Year ${mangoTree.umur} Report] Height = ${mangoTree.tinggi} | Fruits harvested = ${mangoTree.kumpulanBuah}`)
 } while (mangoTree.healthy != false)


// Release 1
class AppleTree {}
class Apple {}

// Release 2
class FruitTree {}
class Fruit {}

// Release 3
class TreeGrove {}
