"use strict"

class FruitTree {

    constructor() {
        this.age = 0
        this.height = 0
        this.jumlahFruits = 0
        this.status = true
        this.harvested = 0
        this.fruit = new Fruit()

    }

    getAge() {
        this.age += 1
    }
    getHeight() {
        this.height += Math.floor(Math.random() * 10) / 10
    }
    getFruits() {
        this.jumlahFruits = Math.round(Math.random() * 10) + 1
    }
    getHealtyStatus() {
        if (this.age >= 25) {
            this.status = false
        }
    }

    grow() {
        this.getAge()
        this.getHeight()
        this.getHealtyStatus()

    }

    // Produce some mangoes
    produceMangoes() {
        this.getFruits()
    }
    // Get some fruits
    harvest() {

        let index = Math.floor(Math.random() * this.jumlahFruits) + 1
        this.harvested = this.jumlahFruits + ' ' + '(' + index + ' ' + this.fruit.quality[1] + ', ' + (this.jumlahFruits - index) + ' ' + this.fruit.quality[0] + ') ';

    }
}

class Fruit {
    constructor() {
        this.quality = ['bad', 'good']
    }
}

module.exports = FruitTree

// let fruit = new FruitTree()
// console.log(fruit.harvest())