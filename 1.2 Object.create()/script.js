// Cara untuk membuat Object pada javascript
// 1. Object Literal
let mahasiswa1 = {
    nama: 'Sandhika',
    energi: 10,
    makan: function(porsi){
        this.energi = this.energi + porsi;
        console.log(`Hallo ${this.nama}, selamat makan!`)
    
    }
}
let mahasiswa2 = {
    nama: 'Doddy',
    energi: 10,
    makan: function(porsi){
        this.energi = this.energi + porsi;
        console.log(`Hallo ${this.nama}, selamat makan!`)
    
    }
}
//percobaan 1.2


// 2. Function Declaration
// 3. Constructor Function
// 4. Object.Create

