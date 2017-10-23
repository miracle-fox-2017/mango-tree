// release 0
class MangoTree {
  // Initialize a new MangoTree
  constructor() {
    this._age = 0;
    this._height = 0;
    this._capacity = 0;
    this._collection = [];
    this._picked = 0;
    this._harvested = '';
    this._healthy = true;
  }

  getAge() {
    return this._age;
  }

  getHeight() {
    return this._height;
  }

  getFruits() {
    return this._collection;
  }

  getHealtyStatus() {
    return this._healthy;
  }

  // Get current states here
  // Grow the tree
  grow() {
    this._age++;
    this._height += Math.random() * 3;
    
    if (this._age === 10) {
      this._healthy = false;
    }
  }

  // Produce some mangoes
  produceMangoes() {
    this._capacity = Math.floor(Math.random() * 11);

    for (let i = 0; i < this._capacity; i++) {
      const mango = new Mango();
      this._collection.push(mango.produce);
    }

    return this._collection;
  }

  // Get some fruits
  harvest() {
    const total = this._capacity;
    let good = 0;
    let bad = 0;

    for (let val in this._collection) {
      this._collection[val].mango === 'good' ? good++ : bad++;
    }

    this._collection = [];
    this._harvested =  `${total} (${good} good, ${bad} bad)`;
  }
}

class Mango {
  // Produce a mango
  constructor() {
    this.produce = this.prod;
  }

  get prod() {
    const produce = ['good', 'bad'];
    const random = Math.floor(Math.random() * 2);
    return {
      mango: produce[random]
    }
  }
}

// driver code untuk release 0
const mangoTree = new MangoTree();

do {
  mangoTree.grow();
  mangoTree.produceMangoes();
  mangoTree.harvest();
  console.log(`[Year ${mangoTree._age} Report] Height = ${mangoTree._height.toFixed(1)} m | Fruits harvested = ${mangoTree._harvested}`)
} while (mangoTree._healthy !== false)
console.log(`The tree has met it's end. :sad:`);

// Release 1
class AppleTree {
  // Initialize a new AppleTree
  constructor() {
    this._age = 0;
    this._height = 0;
    this._capacity = 0;
    this._collection = [];
    this._picked = 0;
    this._harvested = '';
    this._healthy = true;
  }

  getAge() {
    return this._age;
  }

  getHeight() {
    return this._height;
  }

  getFruits() {
    return this._collection;
  }

  getHealtyStatus() {
    return this._healthy;
  }

  // Get current states here
  // Grow the tree
  grow() {
    this._age++;
    this._height += Math.random() * 3;
    
    if (this._age === 10) {
      this._healthy = false;
    }
  }

  // Produce some apples
  produceApples() {
    this._capacity = Math.floor(Math.random() * 11);

    for (let i = 0; i < this._capacity; i++) {
      const apple = new Apple();
      this._collection.push(apple.produce);
    }

    return this._collection;
  }

  // Get some fruits
  harvest() {
    const total = this._capacity;
    let good = 0;
    let bad = 0;

    for (let val in this._collection) {
      this._collection[val].apple === 'good' ? good++ : bad++;
    }

    this._collection = [];
    this._harvested =  `${total} (${good} good, ${bad} bad)`;
  }
}
class Apple {
  // Produce a apple
  constructor() {
    this.produce = this.prod;
  }

  get prod() {
    const produce = ['good', 'bad'];
    const random = Math.floor(Math.random() * 2);
    return {
      apple: produce[random]
    }
  }
}

// driver code untuk release 0
const appleTree = new AppleTree();

do {
  appleTree.grow();
  appleTree.produceApples();
  appleTree.harvest();
  console.log(`[Year ${appleTree._age} Report] Height = ${appleTree._height.toFixed(1)} m | Fruits harvested = ${appleTree._harvested}`)
} while (appleTree._healthy !== false)
console.log(`The tree has met it's end. :sad:`);

// Release 2
class FruitTree {
  // Initialize a new FruitTree
  constructor() {
    this._age = 0;
    this._height = 0;
    this._capacity = 0;
    this._collection = [];
    this._picked = 0;
    this._harvested = '';
    this._healthy = true;
  }

  getAge() {
    return this._age;
  }

  getHeight() {
    return this._height;
  }

  getFruits() {
    return this._collection;
  }

  getHealtyStatus() {
    return this._healthy;
  }

  // Get current states here
  // Grow the tree
  grow() {
    this._age++;
    this._height += Math.random() * 3;
    
    if (this._age === 10) {
      this._healthy = false;
    }
  }

  // Produce some apples
  produceFruit() {
    this._capacity = Math.floor(Math.random() * 11);

    for (let i = 0; i < this._capacity; i++) {
      const fruit = new Fruit();
      this._collection.push(fruit.produce);
    }

    return this._collection;
  }

  // Get some fruits
  harvest() {
    const total = this._capacity;
    let good = 0;
    let bad = 0;

    for (let val in this._collection) {
      this._collection[val].fruit === 'good' ? good++ : bad++;
    }

    this._collection = [];
    this._harvested =  `${total} (${good} good, ${bad} bad)`;
  }
}
class Fruit {
  // Produce a fruit
  constructor() {
    this.produce = this.prod;
  }

  get prod() {
    const produce = ['good', 'bad'];
    const random = Math.floor(Math.random() * 2);
    return {
      fruit: produce[random]
    }
  }
}

// driver code untuk release 0
const fruitTree = new FruitTree();

do {
  fruitTree.grow();
  fruitTree.produceFruit();
  fruitTree.harvest();
  console.log(`[Year ${fruitTree._age} Report] Height = ${fruitTree._height.toFixed(1)} m | Fruits harvested = ${fruitTree._harvested}`)
} while (fruitTree._healthy !== false)
console.log(`The tree has met it's end. :sad:`);

// Release 3
class TreeGrove { }
