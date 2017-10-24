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
    let fruitProduced = this._yearlyProduction;
    let arrFruitProduced = [];

    if (this._age >= this._ageBloom) {
      for (var i = 0; i < fruitProduced; i++) {
        if (this._fruitName === 'Mangga') {
           arrFruitProduced.push(new Mango());
        } else if (this._fruitName === 'Apel') {
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
  constructor(fruitQuality) {
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
  constructor(fruitQuality) {
    super(fruitQuality);
  }
}

//name, heightGainYearly, maxAge, ageBloom, yearlyProduction
let tree = new FruitTree('Mangga', getRandomIntInclusive(3,9), getRandomIntInclusive(2, 8), 3, getRandomIntInclusive(3, 5));

do {
  tree.grow();
  tree.produceFruits();
  tree.harvest();

  console.log(`[Year ${tree._age} Report] Height = ${tree._height} cm | Fruits harvested = ${tree._harvested}`);

  if (tree._healthyStatus == false) {
    console.log(`The ${tree._fruitName} tree has met its end. :sad:`);
  } 
} while (tree._healthyStatus != false)


// Release 3
class TreeGrove {

}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}