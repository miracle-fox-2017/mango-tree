class FruitTree{
  constructor(name,fruits,height,age,health) {
    this.name = name
    this.age = age || 0
    this.height = height || 0
    this.maxFruits = fruits || 20
    this.fruits = []
    this.harvested = null
    this.healthyStatus = health || true
  }

  getAge() {
    this.age++
  }

  grow() {
    this.fruits = []
    this.getAge()
    this.getHeight()
    this.getHealtyStatus()
  }

  produceFruit() {
    let randomFruits = this.getFruits()
    let quality
    for (var i = 0; i < randomFruits; i++) {
      let grade = Math.ceil(Math.random(0)*10)
      if(grade <= 5){
        quality = 'bad'
      }else{
        quality = 'good'
      }
      this.fruits.push(new Fruit(quality))
    }
  }

  harvest() {
    let countFruits = 0
    let countGood = 0
    let countBad = 0
    for (var i = 0; i < this.fruits.length; i++) {
      if(this.fruits[i].quality == 'good'){
        countGood++
        countFruits++
      }else{
        countBad++
        countFruits++
      }
    }
    this.harvested = `${countFruits} (${countGood} good || ${countBad} bad)`
  }
}

class Fruit{
  constructor(quality) {
    quality = quality
  }

}

module.exports = FruitTree;
