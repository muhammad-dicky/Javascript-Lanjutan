// Cara untuk membuat Object pada javascript

// 1. Object Literal
// let mahasiswa1 = {
//     nama: 'Diki',
//     energi: 10,
//     makan: function(porsi){
//         this.energi = this.energi + porsi;
//         console.log(`Hallo ${this.nama}, selamat makan!`)
    
//     }
// }
// let mahasiswa2 = {
//     nama: 'Doddy',
//     energi: 10,
//     makan: function(porsi){
//         this.energi = this.energi + porsi;
//         console.log(`Hallo ${this.nama}, selamat makan!`)
    
//     }
// }





// 2. Function Declaration
// function Mahasiswa(nama, energi){
//     let mahasiswa = {};
// mahasiswa.nama = nama;
// mahasiswa.energi = energi;

// mahasiswa.makan = function(porsi){
// // this.energi = this.energi + porsi;
// this.energi += porsi;
// console.log(`Halo ${this.nama}, selamat makan!`);
// }

// mahasiswa.main = function(jam) {
//     this.energi = this.energi - jam;
//     console.log(`Halo ${this.nama}, selamat bermain!`);
// }

// return mahasiswa;
// }


// let diki = Mahasiswa('Diki', 10);
// let doddy = Mahasiswa('Doddy', 20);





// 3. Constructor Function
// dengan keyword new

function Mahasiswa(nama, energi){
    
this.nama = nama;
this.energi = energi;

this.makan = function(porsi){
// this.energi = this.energi + porsi;
this.energi += porsi;
console.log(`Halo ${this.nama}, selamat makan!`);
}

this.main = function(jam) {
    this.energi = this.energi - jam;
    console.log(`Halo ${this.nama}, selamat bermain!`);
}

}

let diki = new Mahasiswa('Diki', 10);
let doddy = new Mahasiswa('Doddy', 20);







// 4. Object.Create

