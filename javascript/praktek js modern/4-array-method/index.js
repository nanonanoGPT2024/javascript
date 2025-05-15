
/*
    Array method


    map         =>. untuk modifikasi setiap item
    filter      => untuk menyaring data
    reduce      => untuk akumulasi nilai

*/

//  map
const angka = [1,2,3];
//  modifikasi isi
const kali2 = angka.map(n => n * 2);

console.log(kali2);


//  filter
const genap = angka.filter(n => n%2 === 0);
console.log(genap);


const total = angka.reduce((acc, cur) => acc + cur, 0);
console.log(total);