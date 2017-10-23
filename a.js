class Animal {
  constructor(name) {
    this.name = name
    this.darah = 'dingin'
  }
}

class fox extends Animal {
  constructor(name) {
    super()
    this.name = name
    this.bulu = 'hijau'
  }
}

var serigala = new fox('edan')
console.log(serigala)
