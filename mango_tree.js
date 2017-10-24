"use strict"

// Release 2
class FruitTree {
  // age = 0, height = 0, maxAge = 10, heightGrowth = getRandomIntInclusive(10,20), fruitName
  constructor(fruitName, heightGainYearly, maxAge, ageBloom, yearlyProduction) {
    this._fruitName = fruitName;
    this._age = 0;
    this._height = 0;
    this._maxAge = maxAge;
    this._heightGrowth = heightGainYearly;
    this._ageBloom = ageBloom;
    this._yearlyProduction = yearlyProduction;
    this._healthyStatus = true;
    this._fruitProduced = [];
  }

  getAge() {
    return this._age;
  }

  getHeight() {
    return this._height;
  }

  getHealtyStatus() {
    return this._healthyStatus;
  }

  // Grow the tree
  grow() {
    this._age +=  1;
    this._height += this._heightGrowth;

    if (this._age === this._maxAge) {
      this._healthyStatus = false;
    }
  }

  // Produce some mangoes
  produceFruits() {
    let fruitProduced = getRandomIntInclusive(1, this._yearlyProduction);
    let arrFruitProduced = [];

    if (this._age >= this._ageBloom) {
      for (var i = 0; i < fruitProduced; i++) {
        if (this._fruitName === 'Mango') {
           arrFruitProduced.push(new Mango());
        } else if (this._fruitName === 'Apple') {
           arrFruitProduced.push(new Apple());
        } else if (this._fruitName === 'Pear') {
           arrFruitProduced.push(new Pear());
        } else {
           arrFruitProduced.push(new Fruit());
        }
       
      }
    }
    
    this._fruitProduced = arrFruitProduced;
  }

  // Get some fruits
  harvest() {
    let harvestedManggo = this._fruitProduced;
    let goodCount = 0;
    let badCount = 0;

    for (let i = 0; i < harvestedManggo.length; i++){
      if (harvestedManggo[i].fruitQuality == 'Good') {
        goodCount +=1;
      } else if (harvestedManggo[i].fruitQuality == 'Bad') {
        badCount += 1;
      }
    }

    this._harvested =  `${harvestedManggo.length}  (${goodCount} good, ${badCount} bad)`;
  }
}

class Fruit {
  constructor() {
    this.fruitQuality = getRandomIntInclusive(0,1) == 0 ? 'Good' : 'Bad';
  }
}

// release 0

class MangoTree extends FruitTree {
  constructor(fruitName, heightGainYearly, maxAge, ageBloom, yearlyProduction) {
    super(fruitName, heightGainYearly, maxAge, ageBloom, yearlyProduction); 
  }
}

class Mango extends Fruit {
  // Produce a mango
  constructor() {
    super();
  }
}

// Release 1
class AppleTree extends FruitTree {
  constructor(fruitName, heightGainYearly, maxAge, ageBloom, yearlyProduction) {
    super(fruitName, heightGainYearly, maxAge, ageBloom, yearlyProduction); 
  }
}

class Apple extends Fruit{
  constructor() {
    super();
  }
}

class PearTree extends FruitTree {
  constructor(fruitName, heightGainYearly, maxAge, ageBloom, yearlyProduction) {
    super(fruitName, heightGainYearly, maxAge, ageBloom, yearlyProduction); 
  }
}

class Pear extends Fruit {
  constructor() {
    super();
  }
}

class TreeGrove {
  constructor() {
    this.treeName = '';
    this.ageBloom = 2;
    this.heightGainYearly = 1;
    this.maxAge = 5 
    this.healthy = true;
    this.trees = [];
    this.year = 0;
  } 

  nextYear() {
    let tree = null;
    this.year = this.year + 1;
    console.log('YEAR: '+this.year);
    for (var i = 0; i < this.trees.length; i++) {
      this.trees[i].grow();
      this.trees[i].produceFruits();
      this.trees[i].harvest();
      
      console.log(`[${ this.trees[i]._fruitName} Year ${ this.trees[i]._age} Report] Height = ${ this.trees[i]._height} cm | Fruits harvested = ${ this.trees[i]._harvested}`);
    }
  }

  inputTree(treeName, ageBloom, heightGainYearly, maxAge, healthy) {
    this.treeName = treeName;
    this.ageBloom = ageBloom;
    this.heightGainYearly = heightGainYearly;
    this.maxAge = maxAge ;
    this.healthy = healthy;

    let tree = null;
    if (this.treeName === 'MangoTree') {
      //name, heightGainYearly, maxAge, ageBloom, yearlyProduction
      tree = new MangoTree('Mango', this.heightGainYearly, this.maxAge, this.ageBloom, getRandomIntInclusive(3, 5));
    } else if (this.treeName === 'AppleTree') {
      //name, heightGainYearly, maxAge, ageBloom, yearlyProduction
      tree = new AppleTree('Apple', this.heightGainYearly, this.maxAge, this.ageBloom, getRandomIntInclusive(3, 5));
    } else if (this.treeName === 'PearTree') {
      //name, heightGainYearly, maxAge, ageBloom, yearlyProduction
      tree = new PearTree('Pear', this.heightGainYearly, this.maxAge, this.ageBloom, getRandomIntInclusive(3, 5));
    } else {
      tree = new FruitTree('Fruit', this.heightGainYearly, this.maxAge, this.ageBloom, getRandomIntInclusive(3, 5));
    }

     this.trees.push(tree);
   
  }

  show_ages() {
    for (var i = 0; i < this.trees.length; i++) {
      console.log(`Pohon ${this.trees[i]._fruitName} berumur ${this.trees[i]._age}`);
    }
  }

  mature_trees() {  
     for (var i = 0; i < this.trees.length; i++) {
      if (this.year >= this.trees[i]._ageBloom) {
        console.log(`Pohon ${this.trees[i]._fruitName} sudah mature berumur ${this.trees[i]._age}`);
      }   
    }
  }

  dead_trees() {
    for (var i = 0; i < this.trees.length; i++) {
      if (this.year >= this.trees[i]._maxAge) {
        console.log(`Pohon ${this.trees[i]._fruitName} berumur ${this.trees[i]._age} sudah mati berumur ${this.trees[i]._maxAge}`);
      }   
    }
  }
}

let looping = 0;

let grove = new TreeGrove();
grove.inputTree('MangoTree', 0, 1.8, 7, true);
grove.inputTree('AppleTree', 2, 1, 4, true);
grove.inputTree('PearTree', 4, 2.8, 3, true);

grove.nextYear();
grove.nextYear();
grove.nextYear();

grove.show_ages();
grove.mature_trees();
grove.dead_trees();

// grove.show_ages();
// grove.mature_trees();
// grove.dead_trees();


//name, heightGainYearly, maxAge, ageBloom, yearlyProduction
/*let tree = new FruitTree('Mango', getRandomIntInclusive(3,9), getRandomIntInclusive(2, 8), 3, getRandomIntInclusive(3, 5));

do {
  tree.grow();
  tree.produceFruits();
  tree.harvest();

  console.log(`[Year ${tree._age} Report] Height = ${tree._height} cm | Fruits harvested = ${tree._harvested}`);

  if (tree._healthyStatus == false) {
    console.log(`The ${tree._fruitName} tree has met its end. :sad:`);
  } 
} while (tree._healthyStatus != false)*/


function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}