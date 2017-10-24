"use strict"
//===================================> Release 2
class FruitTree {
    constructor(name){
      this._name = name
      this._age = 0;
      this._maxAge = 10;
      this._height = 1;
      this.maxFruit = 20;
      this.healthyStatus = true ;
      this._harvested = null;
      this.fruits = null
    }
    getAge(){
      return this._age;
    }
    getHeight(){
      return this._height;
    }
    getFruits(){
      return this.fruits;
    }
    getHealtyStatus(){
     if (this._age === this._maxAge){
      this.healthyStatus = false
     }
     return true;
    }
    // Get current states here

    // Grow the tree
    grow(){
      if(this._age === 0){
        console.log(this._name+" Tree is Alive ")
      }  
      if(this.getHealtyStatus() === true){
        this._age++
        this._height = this._height + Math.random()*3;
        return this.getHealtyStatus();
      }
      return this.getHealtyStatus();
    }

    // Produce some mangoes
    produceFruit(){
      this.fruits = Math.floor(Math.random()*this.maxFruit)

    }

    // Get some fruits
    harvest(){
      let countGood = 0;
      let countBad = 0;
      for (let i = 0; i<this.fruits ; i++){
        let mango = new Mango(this.fruits)
        if (mango.quality === 0){
          countGood++;
        }
        if (mango.quality === 1){
          countBad++;
        }
      }
      this._harvested = this.fruits+" (Good = "+countGood+" Bad = "+countBad+")"
      return this._harvested
    }

}
class Fruit {
  constructor(){
      this.quality = Math.floor(Math.random()*2);
    }   
}
//===================================> release 0
class Mango extends Fruit {
    // Produce a mango
}

class MangoTree extends FruitTree {
    // Initialize a new MangoTree
    constructor(name){
      super(name)
    }
}

//===================================> Release 1
class AppleTree extends FruitTree{
  constructor(name){
    super(name)
  }
}
class Apple extends Fruit{
}

// driver code untuk release 0
  let mangoTree = new FruitTree("mango")
   do {
     mangoTree.grow();
     mangoTree.produceFruit();
     mangoTree.harvest();
     console.log(`[Year ${mangoTree._age} Report] Height = ${mangoTree._height} | Fruits harvested = ${mangoTree._harvested}`)
     if(mangoTree.healthyStatus === false){
      console.log(mangoTree._name+" Tree is Died")
     }
   } while (mangoTree.healthyStatus != false)
  

  let appleTree = new FruitTree("apple")
   do {
     appleTree.grow();
     appleTree.produceFruit();
     appleTree.harvest();
     console.log(`[Year ${appleTree._age} Report] Height = ${appleTree._height} | Fruits harvested = ${appleTree._harvested}`)
     if(appleTree.healthyStatus === false){
      console.log(appleTree._name+" Tree is Died")
     }
   } while (appleTree.healthyStatus != false)

//===================================> Release 3
class TreeGrove {}