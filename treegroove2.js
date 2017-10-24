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



class Treegrove {

  constructor() {

    this.tree = []

  }

  inputTree(name, age, maxAge, healthyStatus, maxGrowth) {

    if(name == 'MangoTree') {

      this.tree.push(new MangoTree(name, age, maxAge, healthyStatus, maxGrowth))

    }
    else if(name == 'AppleTree') {

      this.tree.push(new AppleTree(name, age, maxAge, healthyStatus, maxGrowth))

    }
    else if(name == 'PearTree') {

      this.tree.push(new PearTree(name, age, maxAge, healthyStatus, maxGrowth))

    }

  }

  showAge() {
    var hasil = 'Daftar Umur Pohon: \n'

    this.tree.forEach((elemen) => {
      hasil = hasil + 'Pohon ' +elemen.name + ' ' + elemen.age + ' tahun \n'
    })

    return hasil
  }

  showTree() {
    var hasil = 'Daftar Pohon: \n'

    this.tree.forEach((elemen) => {

      hasil = hasil + `Pohon ${elemen.name} \n`

    })

    return hasil
  }

  showMature() {
    var hasil = "Daftar Pohon yang sudah bisa berbuah: \n"
    this.tree.forEach((elemen) => {
      if(elemen.age >= elemen.productivityAge && elemen.healthyStatus == true) {
        hasil = hasil + `Pohon ${elemen.name} \n`
      }
    })

    return hasil

    // for(var i = 0; i < saring)
  }

  showDeathTree() {
    var hasil = 'Daftar Pohon yang mati: \n'

    this.tree.forEach((elemen) => {

      if(elemen.healthyStatus == false) {

        hasil = hasil + `Pohon ${elemen.name} \n`

      }

    })

    return hasil

  }

  nextYear() {

    this.tree.forEach((elemen) => {
      elemen.grow()
    })

  }


}

var kebun = new Treegrove()
kebun.inputTree('MangoTree', 0, 9, true, 1.4)
kebun.inputTree('AppleTree', 0, 6, true, 2.5)
kebun.inputTree('PearTree', 0, 9, true, 1.4)

kebun.nextYear()
kebun.nextYear()
kebun.nextYear()
kebun.nextYear()
kebun.nextYear()


console.log(kebun.showTree());
console.log(kebun.showAge())
console.log(kebun.showDeathTree())
console.log(kebun.showMature());
