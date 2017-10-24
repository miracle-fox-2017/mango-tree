const MangoTree = require('./mango_tree')
// const AppleTree = require('./apple_tree')
// const PearTree = require('./pear_tree')

class TreeGrove{
  constructor(){
    this.tree = []
  }

  inputTree(name,fruits,height,age,health){
    switch (name) {
      case 'MangoTree':
        this.tree.push(new MangoTree(name,fruits,height,age,health))
        break;
      case 'AppleTree':
        this.tree.push(new AppleTree(name,fruits,height,age,health))
        break;
      case 'PearTree':
        this.tree.push(new PearTree(name,fruits,height,age,health))
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

grove.inputTree('MangoTree', 3, 1.8, 7, true)
// grove.inputTree('MangoTree', 5, 2.4, 12, true)
// grove.inputTree('AppleTree', 4, 1.2, 5, true)
// grove.inputTree('PearTree', 7, 2, 15, true)

console.log(grove.tree);
