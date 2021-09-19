// 2.1 EXECUTION CONTEXT, HOISTING & SCOPE

// console.log(nama);
// var nama = 'Diki';

// creation phase pada Global Context
// javascript akan mencari variabel & function terlebih dahulu lalu men setnya default :
// nama var = undefiend
// nama function = fn()





var nama = 'Diki';
var umur = 21;

console.log(sayHello());


function sayHello() {
    return `hallo, nama saya ${nama}, umur ${umur} tahun`;
}