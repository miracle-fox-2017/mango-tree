"use strict"
const MangoTree = require('./mango_tree')
const AppleTree = require('./apple_tree')
const PearTree = require('./pear_tree')

class TreeGrove {
    constructor() {
        this.arrTree = []
    }

    inputTree(namaTree, ageTree, heightTree, fruit, statusTree) {
        let tree;
        if (namaTree == "MangoTree") {
            tree = new MangoTree(namaTree, ageTree, heightTree, fruit, statusTree)
        } else if (namaTree == "AppleTree") {
            tree = new AppleTree(namaTree, ageTree, heightTree, fruit, statusTree)
        } else if (namaTree == "PearTree") {
            tree = new PearTree(namaTree, ageTree, heightTree, fruit, statusTree)
        }
        this.arrTree.push(tree)
    }

    show_ages() {

    }
    show_trees() {

    }
    mature_trees() {

    }

    dead_trees() {

    }

}