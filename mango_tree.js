"use strict"

// release 0

class Dice
{
  static randomize(min, max)
  {
    return Math.floor(Math.random() * ((max+1) - min) + min);
  }
}

class MangoTree {

  // Initialize a new MangoTree
  constructor()
  {
    this._maxHeight = Dice.randomize(10, 20);
    this._maxAge = Dice.randomize(10, 35);
    this._height = 0;
    this._age = 0;
    this._tinggi = 0;
    this._maxbuah = 0;
    this._kumpulanBuah = 0;
    this._harvested = 0;
    this._buahSehat = 0;
    this._buahSakit = 0;
    this._isHealty = true;
  }

  getAge()
  {
    return this._age;
  }
  getHeight()
  {
    return this._height;
  }
  getFruits()
  {
    return this._harvested;
  }
  getHealtyStatus()
  {
    return this._isHealty;
  }


  // Get current states here

  // Grow the tree
  grow()
  {
    if (this._age < this._maxAge)
    {
      this._age++;
      if (this._height < this._maxHeight)
      {
        this._height += Dice.randomize(1, 3);
      }
    }
    else
    {
      this._isHealty = false;
    }
  }

  // Produce some mangoes
  produceMangoes()
  {
    this._kumpulanBuah += Dice.randomize(2,7);
  }

  // Get some fruits
  harvest()
  {
    this._buahSehat = 0;
    this._buahSakit = 0;
    let buahYangDipanen = [];
    this._harvested = Dice.randomize(1, this._kumpulanBuah);
    this._kumpulanBuah -= this._harvested;
    for (let i = 0; i < this._harvested; i++)
    {
      let condition = Dice.randomize(1,10)
      if (condition < 5)
      {
        buahYangDipanen.push(new Mango(false))
      }
      else
      {
        buahYangDipanen.push(new Mango(true))
      }
    }

    for (let i = 0; i < buahYangDipanen.length; i++)
    {
      if (buahYangDipanen[i]._quality === true)
      {
        this._buahSehat++;
      }
      else
      {
        this._buahSakit++;
      }
    }
    return `${buahYangDipanen.length} (${this._buahSehat} good, ${this._buahSakit} bad)`
  }

}

class Mango
{
  // Produce a mango
  constructor(quality)
  {
    this._quality = quality;
  }
}


  //  driver code untuk release 0
   let mangoTree = new MangoTree()
   console.log(`The tree is alive! :smile:`);
   do {
     mangoTree.grow();
     mangoTree.produceMangoes();
     mangoTree.harvest();
     console.log(`[Year ${mangoTree._age} Report] Height = ${mangoTree._height} | Fruits harvested = ${mangoTree.harvest()}`)
   } while (mangoTree._isHealty != false)

   console.log(`The tree has met its end. :sad:`);

// Release 1
class AppleTree {}
class Apple {}

// Release 2
class FruitTree {}
class Fruit {}

// Release 3
class TreeGrove {}
