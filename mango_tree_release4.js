"use strict"

// Release 2
class FruitTree {
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
    //kalau tinggi lebih dari 5m...... ga bisa tambah tinggi
    if(Math.floor(Number(this._height)) > 5){
      this._height = this._height;
    } else {
      this._height = Number(this._height);
      this._height += Math.random();
      this._height = this._height.toFixed(2);
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
class Fruit {
  // Produce a mango
  constructor(jumlahBuah) {
    this.jumlahBuah = jumlahBuah;
    this.quality = null;
  }
  
  isQualityGood (){
    if(this.jumlahBuah>0){
      return Math.floor((Math.random() * this.jumlahBuah));
    } else {
      return 0;
    }
  }
  
}


// release 0
console.log('\nMANGO TREE');
class MangoTree extends FruitTree{}
class Mango extends Fruit{}
//driver code untuk release 0
console.log('The tree is alive !!');
let mangoTree = new MangoTree();
do {
  mangoTree.grow();
  mangoTree.produceMangoes();
  mangoTree.harverst();
  console.log(`[Year ${mangoTree._age} Report] Height = ${mangoTree._height} m | Fruits harvested = ${mangoTree._harvested}`)
} while (mangoTree.healthyStatus != false)
console.log('The tree has met its end !!');

// Release 1
console.log('\nAPPLE TREE');
class AppleTree extends FruitTree{}
class Apple extends Fruit{}
//driver code untuk release 1
console.log('The tree is alive !!');
let appleTree = new AppleTree();
do {
  appleTree.grow();
  appleTree.produceMangoes();
  appleTree.harverst();
  console.log(`[Year ${appleTree._age} Report] Height = ${appleTree._height} m | Fruits harvested = ${appleTree._harvested}`)
} while (appleTree.healthyStatus != false)
console.log('The tree has met its end !!');

// Release 2
console.log('\nPEAR TREE');
class PearTree extends FruitTree{}
class Pear extends Fruit{}
//driver code untuk release 2
console.log('The tree is alive !!');
let pearTree = new PearTree();
do {
  pearTree.grow();
  pearTree.produceMangoes();
  pearTree.harverst();
  console.log(`[Year ${pearTree._age} Report] Height = ${pearTree._height} m | Fruits harvested = ${pearTree._harvested}`)
} while (pearTree.healthyStatus != false)
console.log('The tree has met its end !!');

// Release 3
class TreeGrove{
  constructor(){
    this.name = []
    this.age = []
    this.height = []
    this.countTree = []
    this.health = []
  }
  
  inputTree(name, age, height, countTree, health){
    this.name.push(name);
    this.age.push(age);
    this.height.push(height);
    this.countTree.push(countTree);
    this.health.push(health);
  }
  
  nextYear(){
    for(let i =0; i<this.name.length; i++){
      this.age[i] += 1;
      this.height[i] = Number(this.height[i]);
      this.height[i] += Math.random();
      this.height[i] = this.height[i].toFixed(2);
    }
    console.log('\nall grow up!!');
  }
  
  showAge(){
    console.log('\nage trees:');
    for(let i = 0; i<this.name.length; i++){
      console.log('tree name: '+this.name[i]);
      console.log('age: '+this.age[i]);
    }
    
  }
  
  //yang lebih dari 3 tahun umurnya dan sehat walafiat
  mature_trees(){
    console.log('\nmature trees:');
    for(let i = 0; i<this.name.length; i++){
      if(this.age[i] > 3 && this.health[i] == true){
        console.log('tree name: '+this.name[i]);
        console.log('age: '+this.age[i]);
        console.log('height: '+this.height[i]);
        console.log('count_tree: '+this.countTree[i]);
      }
    }
  }
  
  dead_trees(){
    console.log('\ndead trees:');
    let count = 0;
    for(let i = 0; i<this.name.length; i++){
      if(this.health[i] == false){
        count += 1;
        console.log('tree name: '+this.name[i]);
        console.log('age: '+this.age[i]+' year old');
        console.log('height: '+this.height[i]+' m');
        console.log('count_tree: '+this.countTree[i]);
      }
    }
    console.log('dead trees :'+count);
  }
}

//driver
var groove = new TreeGrove();
//input trees data
groove.inputTree('Mango Tree', 3, 1.8, 7, true);
groove.inputTree('Mango Tree', 5, 2.4, 12, true);
groove.inputTree('Apple Tree', 4, 1.2, 5, true);
groove.inputTree('Pear Tree', 7, 2, 15, true);

//next Year
groove.nextYear();

//show trees age
groove.showAge();

//show trees
groove.mature_trees();

//show trees
groove.dead_trees();