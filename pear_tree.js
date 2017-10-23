"use strict"

const FruitTree = require('./fruit_tree')

class PearTree extends FruitTree {
    constructor() {
        super();
    }
    getHeight() {
        this.height += Math.floor(Math.random() * 20) / 10;
    }

    getFruits() {
        this.jumlahFruits = Math.round(Math.random() * 5) + 1;
    }

    getHealtyStatus() {
        if (this.age >= 35) {
            this.status = false;
        }

    }


}

class Pear {


}

let pearTree = new PearTree()
console.log("The tree is alive! :smile: ")
do {
    pearTree.grow();
    pearTree.produceMangoes();
    pearTree.harvest();
    console.log(`[Year ${pearTree.age} Report] Height = ${pearTree.height.toFixed(2)} m | Fruits harvested = ${pearTree.harvested}`)
} while (pearTree.status != false)
console.log("The tree has met its end. :sad:")

// Release 1




// Release 3
//class TreeGrove { }
