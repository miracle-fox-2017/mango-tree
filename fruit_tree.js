"use strict"

// release 0

class FruitTree {

  // Initialize a new MangoTree
  constructor() {
    this.age = 0
    this.height = 0
    this.healthyStatus = true
    this.buahtersedia = []
    this.harvested = []
    this.maxAge = 6
    this.tambahTinggi = 3
    this.maxBuah = 10
  }

  getAge() {
    return this.age
  }
  getHeight() {
    return this.height
  }
  getFruits() {

  }
  getHealtyStatus() {
    return this.healthyStatus
  }


  // Get current states here

  // Grow the tree
  grow() {
    this.age = this.age + 1

    if(this.age <= this.maxAge) {
      this.height = this.height + (Math.random() * this.tambahTinggi)
    }
    else {
      this.healthyStatus = false
    }

    if(this.age + 1 > this.maxAge) {
      this.healthyStatus = false
    }
  }

  // Produce some mangoes
  produceMangoes() {
    this.buahtersedia = []
    if(this.age <= this.maxAge) {
      var jumlahBuah = Math.floor(Math.random() * this.maxBuah)

      for(var i = 0; i <= jumlahBuah; i++) {
        this.buahtersedia.push(new Fruit())
      }
    }
  }

  // Get some fruits
  harvest() {
    var total = 0
    var good = 0
    var bad = 0
    this.harvested = []

    if(this.age <= this.maxAge) {
      for(var i = 0; i < this.buahtersedia.length; i++) {
        if(this.buahtersedia[i].quality == 'good') {
          good = good + 1
        }
        else {
          bad = bad + 1
        }
      }

      total = good + bad
      this.harvested.push(good)
      this.harvested.push(bad)
      this.harvested.push(total)
    }
  }
}

class Fruit {
  // Produce a mango
  constructor() {
    this.quality = this.random()
  }

  random() {
    var bilAcak = Math.round(Math.random())
    if(bilAcak == 1) {
      return 'good'
    }
    else {
      return 'bad'
    }
  }
}



class MangoTree extends FruitTree {
  constructor() {
    super()
    this.maxAge = 7
    this.tambahTinggi = 5
    this.maxBuah = 11
  }
}

class Mango extends Fruit {

}

class AppleTree extends FruitTree {
  constructor() {
    super()
    this.maxAge = 9
    this.tambahTinggi = 9
    this.maxBuah = 6
  }
}

class Apple extends Fruit {

}

class PearTree extends FruitTree {
  constructor() {
    super()
    this.maxAge = 13
    this.tambahTinggi = 10
    this.maxBuah = 10
  }
}

class Pear extends Fruit {

}

var mangga = new PearTree()
console.log(mangga);

// var mangga = new FruitTree()

do {
  mangga.grow()
  mangga.produceMangoes()
  mangga.harvest()
  console.log(`[Year ${mangga.age} Report] Height = ${mangga.height} | Fruits harvested = ${mangga.harvested[2]} (${mangga.harvested[0]} good, ${mangga.harvested[1]} bad)`)
} while(mangga.healthyStatus == true)
console.log('Pohon telah tiada');
