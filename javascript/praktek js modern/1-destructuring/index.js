
/*
 1. destructuring

    - array destructuring
    - object destructuring
 */


    //  array destructuring
    console.log("array destructuring");
    const angka = [10,20,30];
    const [a,b,c] = angka;

    console.log(b);

    console.log("object destructuring");
    const user = { nama : "Riko", umur: 25};
    
    const { nama , umur } = user;

    console.log(nama);