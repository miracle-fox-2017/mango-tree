let MangoTree = require('./mango_tree')
let AppleTree = require('./apple_tree')
let PearTree = require('./pear_tree')

console.log(new MangoTree);
console.log(new AppleTree);
console.log(new PearTree);

class TreeGrove{
  constructor(){
    this.tree = []
  }

  inputTree(name,fruits,height,age,healt){
    switch (name) {
      case 'MangoTree':
        this.tree.push(new MangoTree(fruits,height,age,healt))
        break;
      case 'AppleTree':
        this.tree.push(new AppleTree(fruits,height,age,healt))
        break;
      case 'PearTree':
        this.tree.push(new PearTree(fruits,height,age,healt))
        break;
    }
  }

  show_ages(){

  }

  show_trees(){

  }

  mature_trees(){

  }

  dead_trees(){

  }
}

let grove = new TreeGrove()

// grove.inputTree('MangoTree', 3, 1.8, 7, true)
// grove.inputTree('MangoTree', 5, 2.4, 12, true)
// grove.inputTree('AppleTree', 4, 1.2, 5, true)
// grove.inputTree('PearTree', 7, 2, 15, true)

// console.log(grove.tree);
