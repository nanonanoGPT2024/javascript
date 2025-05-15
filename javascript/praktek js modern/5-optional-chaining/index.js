
// optionall chaining & nullish chaining



// optional chaining
const user = { nama : "adit", alamat : { kota: "bandung"}};

console.log(user.alamat?.kota);
console.log(user.alamat?.kodepos);

// nullish coalescing
let username = null;
console.log(username ?? "Guest");