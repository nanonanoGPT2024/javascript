

/*
    2. spread operator dan rest parameter

    * spread operator
    menyebar isi array / object ke tempat lain

    * rest parameter

    gabungkan sisa argument ke dalam array

*/




// spread operaotr

// array
console.log("array");
const arr1 = [1,2];
const arr2 = [...arr1, 3,4];

console.log(arr2);


// object
console.log("array");
const obj1 = { a:1 };
const obj2 = { ...obj1, b:2};
console.log(obj2);


// reast parameter
console.log("rest parameter");
function sum(...nums) {
    return nums.reduce((a,b) => a+ b);
}

console.log(sum(1,2,3));