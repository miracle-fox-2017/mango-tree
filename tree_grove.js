"use strict"

// release 2
const FruitTree = require('./fruit_tree');
const MangoTree = require('./fruit_tree');
const AppleTree = require('./fruit_tree');
const PearTree = require('./fruit_tree');

class TreeGrove {
	constructor(name, age, height, mature, healthyStatus) {
	this._name = name;
    this._age = age;
    this._height = height;
    this._mature = mature
    this.healthyStatus = healthyStatus;
	}

	inputTree(name, age, height, mature, healthyStatus) {
     	let arr = new FruitTree(name, age, height, mature, healthyStatus);
		return arr;
	}

	showAge() {

	}

	showTree() {

	}

	matureTree() {

	}

	deadTree() {

	}
}

let grove = new TreeGrove();
// input your tree data!
grove.inputTree('MangoTree', 3, 1.8, 7, true);
grove.inputTree('MangoTree', 5, 2.4, 12, true);
grove.inputTree('AppleTree', 4, 1.2, 5, true);
grove.inputTree('PearTree', 7, 2, 15, true);
console.log(grove.inputTree());

// next year
// grove.nextYear();

// show tree age
grove.showAge();

// show all tree
grove.showTree();

// show mature tree
grove.matureTree();

// show dead tree
grove.deadTree();