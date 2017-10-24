"use strict"

// release 0

class MangoTree {

  // Initialize a new MangoTree
  constructor() {
    this.umur=0;
    this.tinggi=0;
    this.Maxbuah=10;
    this.jumlahBuah = []
    this.Buah=0;
    this.buahPetik=0;
    this.isHealty=true;
    this.umurMax=20;
    this.tinggiMax=50;
  }

  getAge() {

    return this.umur;
  }
  getHeight() {

    return this.tinggi;

  }
  getFruits() {
    return this.jumlahBuah;
  }
  getHealtyStatus() {
    return this.isHealthy;
  }
  getHarvest(){
    return this.buahPetik;
  }

  grow() {

    if(this.umur < this.umurMax){
      this.umur++
      if(this.tinggi < this.tinggiMax){
        this.tinggi+= Math.floor(Math.random()*5)
      }
    }
    else{
    this.isHealthy=false;
    }
  }


  // Produce some mangoes
  produceMangoes() {
    // this.jumlahBuah = [];
    this.Buah = Math.floor(Math.random() * this.Maxbuah);
    for (let i = 0; i < this.Buah; i++) {
      let manggo = new Mango();
      this.jumlahBuah.push(manggo.getQuality());
    }

  }

  // Get some fruits
  harvest() {
    let countBad = 0;
    let countGood = 0;
    for(let i = 0;i < this.jumlahBuah.length;i++){
      // console.log('ini jumlah buah'+this.jumlahBuah);
      if (this.jumlahBuah[i]==='Good'){
        countGood++
      }else{
        countBad++
      }
    }
    return `Good ${countGood} | Bad ${countBad}`;
  }
}




class Mango extends MangoTree{
  // Produce a mango
  constructor() {
    super()
    this.buahSehat=0
    this.buahGakSehat=0
  }
  getQuality(){
    let random = Math.floor(Math.random()*2);
    if (random==1){
      return 'Bad';
    }else{
      return 'Good';
    }

  }
}


  //  driver code untuk release 0
   let mangoTree = new MangoTree()
   do {
     mangoTree.grow();
     mangoTree.produceMangoes();
     mangoTree.harvest();
     console.log(`[Year ${mangoTree.getAge()} Report] Height = ${mangoTree.getHeight()} | Fruits harvested = ${mangoTree.harvest()}`)
   } while (mangoTree.isHealthy != false)


// Release 1
class AppleTree extends MangoTree {
  constructor(){
    super()
    this.Maxbuah=40;
  }
}
class Apple extends MangoTree{}

// Release 2
class FruitTree extends MangoTree {}
class Fruit {}

// Release 3
class TreeGrove {}
