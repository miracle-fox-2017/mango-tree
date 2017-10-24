"use strict"

// Release 2
class FruitTree {

  // Initialize a new MangoTree
  constructor(name) {
    this._name = name;
    this._age = 0;
    this._height = 0;
    this._maxFruit = 5;
    // this._maxFruit = 30;
    this._fruit = [];
    this._healthyStatus = true;
    // this._maxAge = 2;
    this._maxAge = 0; //buat parameter akan dirandom umur matinya antara 10-20
    this._harvested = '';
  }

  getAge() {
    return this._age;
  }
  getHeight() {
    return this._height;
  }
  getFruits() {
    return this.fruit;
  }
  getHealtyStatus() {
    return this._healthyStatus;
  }


  // Get current states here

  // Grow the tree
  grow() {
    this._age += 1;
    
    //random tingginya dari 1-20cm per tahun
    let randomHeight = Math.ceil(Math.random()*20);
    //to cm
    this._height = this._height*100;
    
    this._height += randomHeight;
    
    //to m
    this._height = (this._height/100).toFixed(2);
    
    //random kapan dia mati antara 10~20
    this._maxAge = Math.floor(Math.random() * (20 - 10 + 1)) + 10
    
    //if maxed agenya... dia mati
    if(this._age>this._maxAge && this._healthyStatus == true){
      this._healthyStatus = false;
    }
    
  }

  // Produce some fruit
  produceFruit() {}

  // Get some fruits
  harvest() {
    //lopping fruits cari berapa good berapa bad
    let goodFruit = 0;
    let badFruit = 0;
    for(let i =0; i<this._fruit.length; i++){
      if(this._fruit[i].quality == 'good'){
        goodFruit += 1;
      } else if (this._fruit[i].quality == 'bad'){
        badFruit += 1;
      }
    }
    
    this._harvested = this._fruit.length + ' (' +goodFruit+' good, '+badFruit+ ' bad) ';
    //emtpy fruit
    this._fruit = [];
  }


}
class Fruit {
  // Produce a mango
  constructor() {
    this.quality = this.goodOrBad();
  }
  goodOrBad(){
    let rand = Math.ceil(Math.random()*10);
    if(rand<5){
      return 'good'
    } else {
      return 'bad'
    }
  }
}

// release 0
class MangoTree extends FruitTree{
  constructor(name){
    super(name);
  }
  
  // Produce some mangoes
  produceFruit() {
    //random buah
    let randBuah = Math.ceil(Math.random()*this._maxFruit);
    //loop sebanyak buah push ke mango
    for(let i = 0; i<randBuah; i++){
      this._fruit.push(new Mango());
    }
  }
}
class Mango extends Fruit{}

// Release 1
class AppleTree extends FruitTree{
  constructor(name){
    super(name)
  }
  
  // Produce some mangoes
  produceFruit() {
    //random buah
    let randBuah = Math.ceil(Math.random()*this._maxFruit);
    //loop sebanyak buah push ke mango
    for(let i = 0; i<randBuah; i++){
      this._fruit.push(new Apple());
    }
  }
}
class Apple extends Fruit{}

//driver code untuk release 0
let mangoTree = new MangoTree('pohon mangga')
console.log('The Mango Tree is Alive !!');
do {
  mangoTree.grow();
  mangoTree.produceFruit();
  mangoTree.harvest();
  console.log(`[Year ${mangoTree._age} Report] Height = ${mangoTree._height} m | Fruits harvested = ${mangoTree._harvested}`)
} while (mangoTree._healthyStatus != false)
console.log('The Mango Tree Has meet its end. !!');

console.log('\n=============\n');

let appleTree = new AppleTree('pohon apel')
console.log('The Apple Tree is Alive !!');
do {
  appleTree.grow();
  appleTree.produceFruit();
  appleTree.harvest();
  console.log(`[Year ${appleTree._age} Report] Height = ${appleTree._height} m | Fruits harvested = ${appleTree._harvested}`)
} while (appleTree._healthyStatus != false)
console.log('The Apple Tree Has meet its end. !!');

// Release 3
// class TreeGrove {}
