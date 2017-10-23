class FruitTree{
  constructor() {
    this._age = 0
    this._height = 0
    this._fruits = 0
    this._harvested = []
    this._healthyStatus = true
    this._quality = []
  }

  getAge() {
    this._age++
  }

  grow() {
    this.getAge()
    this.getHeight()
    this.getHealtyStatus()
    this._quality = []
    this._harvested = []
  }

  // Produce some mangoes
  produceFruit() {
    this.getFruits()
  }

  qualityCheck() {
    let good = 0
    let bad = 0
    for (var i = 0; i < this._quality.length; i++) {
      if(this._quality[i] == 'good'){
        good++
      }else{
        bad++
      }
    }
    return `(${good} good, ${bad} bad)`
  }

  get age() {
    return this._age
  }

  get height() {
    return this._height
  }

  get healthyStatus() {
    return this._healthyStatus
  }

  get harvested() {
    return `${this._harvested.length} ${this.qualityCheck()}`
  }

  set harvested(value) {
    this._harvested = value
  }
}

class Fruit{

}

module.exports = FruitTree;
