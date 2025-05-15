

//  function biasa
function greet(nama) {
    return "Hallo, " + nama + " salam dari function biasa";
}



// arrow function
const greetArrow = (nama) => {
    return `Hallo, ${nama} salam dari arrow function`;
}


console.log(greet("nanonano"));
console.log(greetArrow("nanonano"));


//  latihan buat fungsi tambah a, b yang mengembalikan hasil penjumlahan a + b

function tambah(a,b) {
    return a+b;
}


const tambah1 = (a,b) => {
    return a+b;
}

console.log("Hasil : ", tambah(5,20));
console.log("Hasil : ", tambah1(5,20));