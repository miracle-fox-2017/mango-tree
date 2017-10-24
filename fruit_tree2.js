class FruitTree {
  constructor(name, age, maxAge,healthyStatus, maxGrowth) {
    this.name = name
    this.age = age
    this.maxAge = maxAge
    this.productivityAge = 2
    this.height = 0
    this.maxCapacity = 10
    this.buahtersedia = []
    this.harvestedFruit = []
    this.healthyStatus = healthyStatus
    this.maxGrowth = maxGrowth
  }

  grow() {
    this.age = this.age + 1

    if(this.age < this.maxAge) {
      this.height = this.height + Math.random() * this.maxGrowth
    }

    if(this.age >= this.maxAge) {
      this.healthyStatus = false
    }
  }

  produceFruit() {
    if(this.age >= this.productivityAge) {

      var jumlahBuah = Math.floor(Math.random() * this.maxCapacity)

      for(var i = 0; i < jumlahBuah; i++) {
        this.buahtersedia.push(new Fruit())
      }

    }

  }

  harvest() {

    this.harvestedFruit = this.buahtersedia

    this.buahtersedia = []

  }

  harvested() {

    var harvest = ''
    var good = 0
    var bad = 0


    for(var i = 0; i < this.harvestedFruit.length; i++) {

      if(this.harvestedFruit[i].quality == 'good') {

        good++

      }

      else {

        bad++

      }


    }

    harvest = `${this.harvestedFruit.length} (${good} good dan ${bad} bad)`

    return harvest
  }

}

class Fruit {
  constructor() {
    this.nama = 'Buah'
    this.quality = this.random()
  }

  random() {
    if(Math.round(Math.random()) == 1) {
      return 'good'
    }
    return 'bad'
  }
}


class MangoTree extends FruitTree {
  constructor(name, age, maxAge,healthyStatus, maxGrowth) {
    super()
    this.name = name
    this.age = age
    this.maxAge = maxAge
    this.productivityAge = 3
    this.healthyStatus = healthyStatus
    this.maxGrowth = maxGrowth
  }

  produceFruit() {
    if(this.age >= this.productivityAge) {

      var jumlahBuah = Math.floor(Math.random() * this.maxCapacity)

      for(var i = 0; i < jumlahBuah; i++) {
        this.buahtersedia.push(new Mango())
      }

    }

  }

}

class Mango extends Fruit {

}

class AppleTree extends FruitTree {
  constructor(name, age, maxAge,healthyStatus, maxGrowth) {
    super()
    this.name = name
    this.age = age
    this.maxAge = maxAge
    this.productivityAge = 5
    this.healthyStatus = healthyStatus
    this.maxGrowth = maxGrowth
  }

  produceFruit() {
    if(this.age >= this.productivityAge) {

      var jumlahBuah = Math.floor(Math.random() * this.maxCapacity)

      for(var i = 0; i < jumlahBuah; i++) {
        this.buahtersedia.push(new Apple())
      }

    }

  }

}

class Apple extends Fruit {

}

class PearTree extends FruitTree {
  constructor(name, age, maxAge,healthyStatus, maxGrowth) {
    super()
    this.name = name
    this.age = age
    this.maxAge = maxAge
    this.productivityAge = 4
    this.healthyStatus = healthyStatus
    this.maxGrowth = maxGrowth
  }

  produceFruit() {
    if(this.age >= this.productivityAge) {

      var jumlahBuah = Math.floor(Math.random() * this.maxCapacity)

      for(var i = 0; i < jumlahBuah; i++) {
        this.buahtersedia.push(new Pear())
      }

    }

  }

}

class Pear extends Fruit {

}


var pohon = new PearTree('PearTree', 0, 9, true, 4)


do{
  pohon.grow()
  pohon.produceFruit()
  pohon.harvest()
  console.log(`[Year ${pohon.age} Report] Height = ${pohon.height} Fruit harvested = ${pohon.harvested()}`)
} while(pohon.healthyStatus)
console.log(`The ${pohon.name} has met its end. :sad`);
