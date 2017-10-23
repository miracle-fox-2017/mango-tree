"use strict"

// release 2

class FruitTree {
  // Initialize a new FruitTree
  constructor() {
    this._age = 0;
    this._height = 0;
    this.healthyStatus = true;
    this.jumlahBuah = 0;
    this._harvested = '';
  }

  getAge() {
    this._age++;
  }

  getHeight() {
    this._height += Math.floor(Math.random() * 10) / 10;
  }

  getFruits() {
    if (this._age <= 1) {
      this.jumlahBuah = 0;
    } else if (this._age > 1 && this._age <= 2) {
      this.jumlahBuah = (Math.floor(Math.random() * 50) + 1);
    } else if (this._age > 2 && this._age <= 3) {
      this.jumlahBuah = (Math.floor(Math.random() * 200) + 1);
    } else if (this._age > 4 && this._age <= 6) {
      this.jumlahBuah = (Math.floor(Math.random() * 50) + 1);
    } else if (this._age > 7) {
      this.jumlahBuah = 0;
    }
  }

  getHealtyStatus() {
    if (this._age > 8) {
      this.healthyStatus = false;
    }
  }

  // Get current states here
  // Grow the tree
  grow() {
    this.getAge();
    this.getHeight();
    this.getHealtyStatus();
  }

  // Produce some fruits
  produceFruits() {
    this.getFruits();
  }

  // Get some fruits
  harvest() {
    let arr = [[],[]];
    for (let i = 0; i < this.jumlahBuah; i++) {
      arr[Math.floor(Math.random() * 2)].push(i);
    }
    this._harvested = arr[0].length + arr[1].length + ' (' + arr[0].length + ' good, ' + arr[1].length + ' bad)';
  }
}

class Fruit {
  constructor() {
    this.kualitas = kualitas;
  }
}

module.exports = FruitTree;
