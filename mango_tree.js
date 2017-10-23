"use strict"

//=======================================> Release 2
class FruitTree{
    constructor(maxHeight=20,name){
        this._age=0;
        this._height=0;
        this._harvested=0;
        this.maxHeight=maxHeight;
        this.healtyStatus=true;
        this.goodFruits=0;
        this.badFruits=0;
        this.totalPanen=0;
        this.namaPohon=name;
    }
    // Get current states here
    getAge(){
        return this._age;
    }
    getHeight(){
        return this._height;
    }
    getFruits(){
        return {
            bad:this.badFruits,
            good:this.goodFruits,
            total:this.totalPanen
        }
    }
    getHealtyStatus(){
        return this.healtyStatus;
    }
    // Grow the tree
    grow(maxAge){
        this._age+=1; // Pertambahan 1 tahun
        this._height+=Math.round(Math.random() * 16) / 4; // Pertambahan angka random
        if(this.getAge() == maxAge){ // Jika usia telah mencapai 20 maka Healty Status menjadi false
            this.healtyStatus=false;
        }
        if(this.getHeight() >= this.maxHeight){ // Jika tinggi pohon telah melebihi / sama dengan tinggi maksimal maka tidak akan bertumbuh lagi
            this._height=this.maxHeight;
        }
    }
    // Produce some fruits
    produceMangoes(){
        const fruits=new Fruit();
        return fruits.generateRandom();
    }
    // Get some fruits
    harvest(){
        this._harvested=this.produceMangoes();
        this.totalPanen+=this._harvested;
        const random=new Fruit(5,this._harvested); // Membuat angka random dengan min => 5 dan max => jumlah buah yang dipanen
        this.goodFruits=random.generateRandom();
        this.badFruits=this._harvested - this.goodFruits;
    }
}
class Fruit{
    // Produce a mango
    constructor(min=5,max=15){
        this.minFruits=min;
        this.maxFruits=max;
    }
    generateRandom(){ // Membuat angka random berdasarkan min dan max
        return Math.floor(Math.random() * (this.maxFruits - this.minFruits) + this.minFruits);
    }
}

// const tree=(name,maxHeight,maxAge)=>{
//     const fruitTree=new FruitTree(maxHeight,name);
//     console.log(`The Tree is Alive! - ${name} Tree`);
//     do{
//         fruitTree.grow(maxAge);
//         fruitTree.produceMangoes();
//         fruitTree.harvest();
//         console.log(`[Year ${fruitTree._age} Report Pohon ${fruitTree.namaPohon}] Height = ${fruitTree._height} | Fruits harvested = ${fruitTree._harvested} (${fruitTree.getFruits().good} Good, ${fruitTree.getFruits().bad} Bad) | Total Panen : ${fruitTree.getFruits().total}`);
//     }while(fruitTree.getHealtyStatus() !== false);
// }
// console.log("Pohon Kelapa");
// tree("Kelapa",30,50);
// console.log("Pohon Salak");
// tree("Salak",15,20);

//=======================================> release 0
class MangoTree extends FruitTree{
  // Initialize a new MangoTree
    constructor(maxHeight=20){
        super();
        this.maxHeight=maxHeight;
    }
    // Get current states here
    getAge(){
        return this._age;
    }
    getHeight(){
        return this._height;
    }
    getFruits(){
        return {
            bad:this.badFruits,
            good:this.goodFruits,
            total:this.totalPanen
        }
    }
    getHealtyStatus(){
        return this.healtyStatus;
    }
    // Grow the tree
    grow(maxAge){
        this._age+=1; // Pertambahan 1 tahun
        this._height+=Math.round(Math.random() * 16) / 4; // Pertambahan angka random
        if(this.getAge() == maxAge){ // Jika usia telah mencapai 20 maka Healty Status menjadi false
            this.healtyStatus=false;
        }
        if(this.getHeight() >= this.maxHeight){ // Jika tinggi pohon telah melebihi / sama dengan tinggi maksimal maka tidak akan bertumbuh lagi
            this._height=this.maxHeight;
        }
    }
    // Produce some mangoes
    produceMangoes(){
        const mango=new Mango();
        return mango.generateRandom();
    }
    // Get some fruits
    harvest(){
        this._harvested=this.produceMangoes();
        this.totalPanen+=this._harvested;
        const random=new Mango(5,this._harvested); // Membuat angka random dengan min => 5 dan max => jumlah buah yang dipanen
        this.goodFruits=random.generateRandom();
        this.badFruits=this._harvested - this.goodFruits;
    }

}
class Mango {
    // Produce a mango
    constructor(min=5,max=15){
        this.minFruits=min;
        this.maxFruits=max;
    }
    generateRandom(){ // Membuat angka random berdasarkan min dan max
        return Math.floor(Math.random() * (this.maxFruits - this.minFruits) + this.minFruits);
    }
}

const mangoTree=new MangoTree(30);
// console.log("The Tree is Alive! - Mango Tree");
// do{
//     mangoTree.grow(25); // Tumbuhkan pohon
//     mangoTree.produceMangoes(); // Tumbuhkan buah mangga
//     mangoTree.harvest(); // Panen buah + mementukan jumlah buah kualitas baik & buruk
//     console.log(`[Year ${mangoTree._age} Report] Height = ${mangoTree._height} | Fruits harvested = ${mangoTree._harvested} (${mangoTree.getFruits().good} Good, ${mangoTree.getFruits().bad} Bad) | Total Panen : ${mangoTree.getFruits().total}`);
// }while(mangoTree.getHealtyStatus() !== false); // Selama pohon dalam keadaan sehat (True)

//=======================================> Release 1
class AppleTree extends FruitTree{
    constructor(maxHeight=20){
        super();
        this.maxHeight=maxHeight;
    }
    // Get current states here
    getAge(){
        return this._age;
    }
    getHeight(){
        return this._height;
    }
    getFruits(){
        return {
            bad:this.badFruits,
            good:this.goodFruits,
            total:this.totalPanen
        }
    }
    getHealtyStatus(){
        return this.healtyStatus;
    }
    // Grow the tree
    grow(maxAge){
        this._age+=1; // Pertambahan 1 tahun
        this._height+=Math.round(Math.random() * 15) / 8; // Pertambahan angka random
        if(this.getAge() == maxAge){ // Jika usia telah mencapai 20 maka Healty Status menjadi false
            this.healtyStatus=false;
        }
        if(this.getHeight() >= this.maxHeight){ // Jika tinggi pohon telah melebihi / sama dengan tinggi maksimal maka tidak akan bertumbuh lagi
            this._height=this.maxHeight;
        }
    }
    // Produce some apples
    produceApples(){
        const apple=new Apple(10,20);
        return apple.generateRandom();
    }
    // Get some fruits
    harvest(){
        this._harvested=this.produceApples();
        this.totalPanen+=this._harvested;
        const random=new Apple(5,this._harvested); // Membuat angka random dengan min => 5 dan max => jumlah buah yang dipanen
        this.goodFruits=random.generateRandom();
        this.badFruits=this._harvested - this.goodFruits;
    }
}
class Apple{
    // Produce Apple
    constructor(min=5,max=15){
        this.minFruits=min;
        this.maxFruits=max;
    }
    generateRandom(){ // Membuat angka random berdasarkan min dan max
        return Math.floor(Math.random() * (this.maxFruits - this.minFruits) + this.minFruits);
    }
}

const appleTree=new AppleTree(20);
// console.log("The Tree is Alive! - Apple Tree");
// do{
//     appleTree.grow(25);
//     appleTree.produceApples();
//     appleTree.harvest();
//     console.log(`[Year ${appleTree._age} Report] Height = ${appleTree._height} | Fruits harvested = ${appleTree._harvested} (${appleTree.getFruits().good} Good, ${appleTree.getFruits().bad} Bad) | Total Panen : ${appleTree.getFruits().total}`);
// }while(appleTree.getHealtyStatus() !== false);

// Release 3
class TreeGrove {}
