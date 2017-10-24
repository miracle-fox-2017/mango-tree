"use strict"

class MangoTree {

  // Initialize a new MangoTree
  constructor() {
    this.umur = 0;
    this.tinggi = 0;
    this.max = 30;
    this.kumpulanBuah = [];
    this.buahPetik = 0;
    this.healthy = true;
    this.maxAge = 20;
  }

  getAge() {
    return this.umur;
  }
  getHeight() {
    return this.tinggi;
  }
  getFruits() {
    return this.kumpulanBuah;
  }
  getHealtyStatus() {
    return this.healthy;
  }

  // Grow the tree
  grow() {
    if(this.umur < this.maxAge && this.healthy == true) {
      this.umur = this.umur + 1;
      this.tinggi = this.tinggi + 2;
    } else {
      this.healthy = false;
    }
  }

  // Produce some mangoes
  produceMangoes() {
    let random = Math.ceil(Math.random() * this.max);
      // console.log(random);
      for(let i = 0 ; i < random ; i++) {
        this.kumpulanBuah.push(new Mango());
      }
      return this.kumpulanBuah;
  }


  harvest() {
    let hitungbaik = 0;
    let hitungburuk = 0;
      for(let i = 0 ; i < this.kumpulanBuah.length; i++) {
        if(this.kumpulanBuah[i].kualitas === 'GOOD') {
          hitungbaik = hitungbaik + 1;
        } else {
          hitungburuk = hitungburuk + 1
        }
      }
      return 'Jumlah Buah ' + this.kumpulanBuah.length + ' || ' + 'good : ' + hitungbaik + ' bad ' + hitungburuk;
  }

}


class Mango {
  constructor() {
    this.kualitas = this.getKualitas();
  }

  getKualitas() {
    let random = Math.round(Math.random() * 3);
      if(random === 0) {
        return 'BAD'
      } else {
        return 'GOOD'
      }
    }
}


 // driver code untuk release 0
 let mangoTree = new MangoTree()
 do {
   mangoTree.grow();
   mangoTree.produceMangoes();
   mangoTree.harvest();
   console.log(`[Year ${mangoTree.umur} Report] Height = ${mangoTree.tinggi} | Fruits harvested = ${mangoTree.harvest()}`)
 } while (mangoTree.healthy != false)


// Release 1
class AppleTree {}
class Apple {}

// Release 2
class FruitTree {}
class Fruit {}

// Release 3
class TreeGrove {}


// let obj = {
//     nama : 'Fabio',
//     umur : '22',
//     hobby : { hobby1 : 'Basket',
//               hobby2 : 'Game',
//               hobby3 : 'Javascript'
//             },
//     dream : 'Change the world',
//     alamat : 'Sultan Hasanuddin',
//
//     jalan : function(tempat) {
//       return 'Mobil Jalan ke ' + tempat
//     },
//
//     hidupkan : function(status) {
//       return 'Mobil Hidup hingga ' + status
//     }
// };


// let arr = []; array baru
// console.log(obj.nama); mengakses obj dengan property nama dan value fabio
// obj.nama = 'ivon'; mengganti value dari property nama dengan ivon
// console.log(obj.nama); mengakses objek dengan property nama dan value yang sudah berubah menjadi ivon
// console.log(obj.umur); mengakses obj dengan umur dan valuenya (22)
// obj.umur = '23'; mengganti value dari property umur menjadi 23
// console.log(obj.umur) mengakses objek dengan property umur dan value yang sudah berubah menjadi 23
// arr.push(obj); mencoba untuk push semua objek di atas ke dalam array [{}];
// console.log(arr); mencetak array yang di dalamnya sudah ada object
// console.log(obj); mengakses objek obj dengan semua property dan nilai yang ada di dalam objek tersebut
// console.log(arr[0].umur); mengakses array of object yang sudah ada ,akses untuk nilai di array ke 0 dan property umur
// console.log(obj.jalan('Amerika')); mengakses objek dengan method/function dengan satu parameter isinya 'Amerika'
// console.log(obj.hidupkan('Meledak')); mengakses objek dengan method hidupkan dengan satu parameter isinya 'Meledak'
// console.log(obj["jalan"]('Australia')); mengakses objek dengan cara bracket notation dan satu parameter dengan isi Australia
// console.log(obj["hidupkan"]('Tidak Meledak')) mengakses objek dengan cara bracket notation dan satu parameter dengan isi 'Tidak Meledak'
// console.log(obj.hobby.hobby1); cara mengakses nested array
// console.log(obj.hobby.hobby2); cara mengakses nested array
// console.log(obj.hobby.hobby3); cara mengakses nested array
