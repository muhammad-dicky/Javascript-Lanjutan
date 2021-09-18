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
function Mahasiswa(nama, energi){
    let mahasiswa = {};
mahasiswa.nama = nama;
mahasiswa.energi = energi;

mahasiswa.makan = function(porsi){
// this.energi = this.energi + porsi;
this.energi += porsi;
console.log(`Halo ${this.nama}, selamat makan!`);
}
return mahasiswa;
}
let Diki = Mahasiswa('Diki', 10);



// 3. Constructor Function
// 4. Object.Create

