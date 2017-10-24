"use strict"

// release 0

class MangoTree {

  // Initialize a new MangoTree
  constructor() {
    this.umur = 0;
    this.tinggi = 0;
    this.maxbuah = 30;
    this.jumlah = [];
    this.fruits = 0;
    this.harvested = 0;
    this.healthyStatus = true;
    this.maxumur = 10
  }
  getAge() {
    return this.umur;
  }
  getHeight() {
    return this.tinggi;
  }
  getFruits() {
    return this.fruits
  }
  getHealtyStatus() {
    return this.healthyStatus
  }
  // Get current states here
  // Grow the tree
  grow() {
    this.umur +=1
    if(this.umur == this.maxumur) {return this.healthyStatus = false}
    this.tinggi += Math.random() * 2
    if(this.tinggi > 7) return this.tinggi;
  }

  // Produce some mangoes
  produceMangoes() {
    this.fruits = Math.ceil(Math.random() * this.maxbuah)
    for(let i = 0; i < this.fruits; i++){
      this.jumlah.push(new Mango())
    }
  }
  // Get some fruits
  harvest() {
    let countgood = 0;
    let countbad = 0;

    for(let i = 0; i < this.jumlah.length; i++){
      if(this.jumlah[i].kualitas== 'good'){countgood++}
      else{countbad++}
    }
    return `${this.jumlah.length} | good ${countgood} | bad ${countbad}`
  }
}


class Mango {
  // Produce a mango
  constructor() {
    this.kualitas = this.getQuality();
  }
  getQuality(){
    let kualitas =  Math.floor(Math.random() * 2)
    if(kualitas == 0){
      return 'bad'
    }
    else{
      return 'good'
    }
    return kualitas
  }
}


  // * driver code untuk release 0
   let mangoTree = new MangoTree()
  //  console.log(MangoTree.grow());
   do {
     mangoTree.grow();
     mangoTree.produceMangoes();
     mangoTree.harvest();
     console.log(`[tahun ke ${mangoTree.umur} Report] Tinggi = ${mangoTree.tinggi.toFixed(1)} m | Fruits harvested = ${mangoTree.harvest()}`)
   } while (mangoTree.healthyStatus != false)

   // Release 1
   class AppleTree {
     // Initialize a new AppleTree
     constructor() {
       this.umur = 0;
       this.tinggi = 0;
       this.capacity = 0;
       this.jumlah = [];
       this.harvested = 0;
       this.maxumur = 10;
       this.healthy = true;
     }

     getAge() {
       return this.umur;
     }

     getHeight() {
       return this.tinggi;
     }

     getFruits() {
       return this.capacity;
     }

     getHealtyStatus() {
       return this.healthy;
     }

     // Get current states here
     // Grow the tree
     grow() {
       this.umur++;
       this.tinggi += Math.random() * 3;

       if (this.umur === 10) {
         this.healthy = false;
       }
     }

     // Produce some apples
     produceApples() {
       this.capacity = Math.floor(Math.random() * 11);

       for (let i = 0; i < this.capacity; i++) {
         let apple = new Apple();
         this.jumlah.push(apple.produce);
       }
       console.log(this.jumlah);
       return this.jumlah;

     }

     // Get some fruits
     harvest() {
       const total = this.capacity;
       let good = 0;
       let bad = 0;

       for (let val in this.collection) {
         this.jumlah[val].apple === 'good' ? good++ : bad++;
       }

       this.collection = [];
      //  this.harvested =  `${total} (${good} good, ${bad} bad)`;
     }
   }
   class Apple {
     // Produce a apple
     constructor() {
       this.produce = this.prod;
     }

     get prod() {
       let produce = ['good', 'bad'];
       let random = Math.floor(Math.random() * 2);
       return {
         apple: produce[random]
       }
     }
   }

   // driver code untuk release 0
   let appleTree = new AppleTree();

   do {
     appleTree.grow();
     appleTree.produceApples();
     appleTree.harvest();
     console.log(`[Tahun ke ${appleTree.umur} Report] Tinggi = ${appleTree.tinggi.toFixed(1)} m | Fruits harvested = ${appleTree.harvested}`)
   } while (appleTree.healthy !== false)
   console.log(`The tree has met it's end. :sad:`);
      // console.log(`The tree has met its end :sad:`);
      let mangga = new Mango();

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











//
