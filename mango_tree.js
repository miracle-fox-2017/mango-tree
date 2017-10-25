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



  }

  // Get some fruits
  harvest() {
    let harvest = Math.floor(Math.random() * this.Buah);
    this.Buah-=harvest
    let basket=[]
    for(let i = 0;i < harvest;i++){
      basket.push(new Mango())
    }
    let countGood=0
    let countBad=0
    for(let i=0;i<basket.length;i++){
      if(basket[i].quality=='Good'){
        countGood++
      }
      else{
        countBad++
      }
    }
    return `${harvest} Good ${countGood} | Bad ${countBad}`;
  }
}




class Mango {
  // Produce a mango
  constructor() {
    this.quality = this.getQuality()
  }
  getQuality(){
    let random = Math.floor(Math.random()*2);
    if (random==1){
      return 'Good';
    }else{
      return 'Bad';
    }

  }
}


  //  driver code untuk release 0
   let mangoTree = new MangoTree()
   do {
     mangoTree.grow();
     mangoTree.produceMangoes();
     mangoTree.harvest();
     console.log(`[Year ${mangoTree.getAge()} Report] Height = ${mangoTree.getHeight()} | Fruits harvested =  ${mangoTree.harvest()}`)
   } while (mangoTree.isHealthy != false)


// Release 1
class AppleTree extends MangoTree {
  constructor(){
    super()
    this.Maxbuah=40;
  }
}
class Apple {}

// Release 2
class FruitTree  {}
class Fruit {}

// Release 3
class TreeGrove {}
