// bagian 3: conditional & loop

// if /else
let nilai = 80;

console.log("Decision");
if (nilai >= 75) {
  console.log("Lulus");
} else {
  console.log("Tidak Lulus");
}

// looping
let angka = [1, 2, 3];

console.log("Coba looping denga for");
for (let i = 0; i < angka.length; i++) {
  console.log(angka[i]);
}

console.log("Looping dengan foreach : ");
angka.forEach((a) => console.log(a));

// latihan menampilkan angkan yang lebih dari 25
let angka1 = [10, 20, 30, 40];

console.log("latihan looping dengan for");
for (let i = 0; i < angka1.length; i++) {
  if (angka1[i] > 25) {
    console.log(angka1[i]);
  }
}


console.log("latihan looping dengan foreach");
angka1.forEach((a) => a > 25 ? console.log(a):"");
