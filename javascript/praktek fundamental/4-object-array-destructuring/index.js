
// bagian 4 : object & array destructuring

const user = { nama: "Budi", umur: 30};
const { nama, umur } = user;

console.log(nama);

const arr = [1,2,3];
const [b,c,d,e] = arr;

//  jadi dia ngurutin sesuai index

console.log(e);


//  latihan destructuring array [5,10,15] tampilkna isi tengah

const arr1 = [1,10,15];
const [x,y,z] = arr1;



console.log(y);