const tombol = document.getElementById("btnUbah");
const judul = document.getElementById("judul");

tombol.addEventListener("click", () => {
  judul.textContent = "Judul berubah!";
});

/*
getElementById()    => di pakai untuk mengambil element
addEventListener()  => menanganin event (klik tombol)
textContent()       => mengubah isi text element


*/



// seleksi elemetn lainya
// const btn = document.querySelector(".btn")
// const semuaParagraf = document.querySelectorAll("p")


//  event lain yang umum 
// input.addEventListener("input", (e) => {
//     console.log(e.target.value);
// });

// form.addEventListener("submit", (e) => {
//     e.preventDefault();
//     console.log("Form Submit");
// })


// fungsi sapa
const inputNama = document.getElementById("nama");
const btnSap = document.getElementById("sapa");
const hasil = document.getElementById("hasil");

btnSap.addEventListener("click", () => {
    // alert("test")
    const nama = inputNama.value;
    hasil.textContent = `Hallo ${nama}!`;
})

