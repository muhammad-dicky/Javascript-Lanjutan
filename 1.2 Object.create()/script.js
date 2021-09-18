// Cara untuk membuat Object pada javascript

// 1. Object Literal
// PROBLEM : tidak efektif untuk object yang banyak
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
// PROBLEM : agak efektif, tapi jika ada method baru didalam object maka harus ditulis manual pada function
//const methodMahasiswa = {

//  tidur: function (jam) {
// this.energi = this.energi - jam;
//     this.energi -= jam;
//      console.log(`halo ${this.nama}, selamat tidur!`);
//  },

// makan: function (porsi) {
// this.energi = this.energi + porsi;
//         this.energi += porsi;
//         console.log(`Halo ${this.nama}, selamat makan!`);
//     },

//     main: function (jam) {
//         this.energi = this.energi - jam;
//         console.log(`Halo ${this.nama}, selamat bermain!`);
//     }
// };

// function Mahasiswa(nama, energi) {
//     let mahasiswa = {};
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;
//     mahasiswa.makan = methodMahasiswa.makan;
//     mahasiswa.main = methodMahasiswa.main;
//     mahasiswa.tidur = methodMahasiswa.tidur;

//     return mahasiswa;
// }

// let diki = Mahasiswa('Diki', 10);
// let doddy = Mahasiswa('Doddy', 20);





// 3. Constructor Function
// dengan keyword new

// function Mahasiswa(nama, energi) {

//     this.nama = nama;
//     this.energi = energi;

//     this.makan = function (porsi) {
//         // this.energi = this.energi + porsi;
//         this.energi += porsi;
//         console.log(`Halo ${this.nama}, selamat makan!`);
//     }

//     this.main = function (jam) {
//         this.energi = this.energi - jam;
//         console.log(`Halo ${this.nama}, selamat bermain!`);
//     }

// }

// let diki = new Mahasiswa('Diki', 10);
// let doddy = new Mahasiswa('Doddy', 20);







// 4. Object.Create
// metode penulisan object ini adalah yang paling efektif dari segi manajemen memory dan kemudahan penulisan
const methodMahasiswa = {

    tidur: function (jam) {
        // this.energi = this.energi - jam;
        this.energi = this.energi * jam;
        // this.energi += jam * 2;
        console.log(`halo ${this.nama}, selamat tidur!`);
    },

    makan: function (porsi) {
        // this.energi = this.energi + porsi;
        this.energi += porsi;
        console.log(`Halo ${this.nama}, selamat makan!`);
    },

    main: function (jam) {
        this.energi = this.energi - jam;
        console.log(`Halo ${this.nama}, selamat bermain!`);
    }
};

//fungsi object.create ini kita jadi bisa menyimpan parameter yang mengacu pada object yang ingin kita sambungkan (ke parent object) mirip pewarisan pada OOP
function Mahasiswa(nama, energi) {
    let mahasiswa = Object.create(methodMahasiswa);
    mahasiswa.nama = nama;
    mahasiswa.energi = energi;


    return mahasiswa;
}

let diki = Mahasiswa('Diki', 10);
let doddy = Mahasiswa('Doddy', 20);
