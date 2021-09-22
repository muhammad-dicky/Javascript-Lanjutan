// 2.1 EXECUTION CONTEXT, HOISTING & SCOPE

// console.log(nama);
// var nama = 'Diki';

// creation phase pada Global Context
// javascript akan mencari variabel & function terlebih dahulu lalu men setnya default :
// nama var = undefiend
// nama function = fn()




// var nama = 'Diki';
// var umur = 21;

// console.log(sayHello());


// function sayHello() {
//     return `hallo, nama saya ${nama}, umur ${umur} tahun`;
// }

// function membuat Local Execution Context
// yang didalamnya terdapat creation dan execution phase :
// window
// arguments (yang bisa berisi parameter dari object, "function sayHello(parameter)" )
// local hoisting



// var nama = "Muhammad Dicky";
// var username = '@dickyn';

// function cetakURL(username) {
//     var instagramURL = 'http://instagram.com/';
//     return instagramURL + username;

// };

// console.log(cetakURL(username));


// contoh stack hoisting

var nama = "Dicky";

function a() {
    console.log("hallo ini a");

    function b() {
        console.log("hallo ini b");

        function c() {
            console.log("hallo ini c");
        }
        c();
    }
    b();
}
a();

console.log(a());