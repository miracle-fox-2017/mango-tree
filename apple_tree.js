"use strict"

const FruitTree = require('./fruit_tree')

class AppleTree extends FruitTree {
    constructor() {
        super();
    }
    getHeight() {
        this.height += Math.floor(Math.random() * 5) / 10;
    }

    getFruits() {
        this.jumlahFruits = Math.round(Math.random() * 15) + 1;
    }

    getHealtyStatus() {
        if (this.age >= 10) {
            this.status = false;
        }

    }


}

class Apple {


}

let appleTree = new AppleTree()
console.log("The tree is alive! :smile: ")
do {
    appleTree.grow();
    appleTree.produceMangoes();
    appleTree.harvest();
    console.log(`[Year ${appleTree.age} Report] Height = ${appleTree.height.toFixed(2)} m | Fruits harvested = ${appleTree.harvested}`)
} while (appleTree.status != false)
console.log("The tree has met its end. :sad:")

// Release 1




// Release 3
//class TreeGrove { }
