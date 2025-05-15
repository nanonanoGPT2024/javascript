


//  spread & rest 

let arr = [1,2,3];
let arr2 = [...arr, 3,4]; // menggabungkan arr1 dan nilai tambahan

function sum(...nums) {
    return(nums.reduce((a,b) => a+b));
}


//  ternary operator


let nilai = 90;
let status = nilai > 75 ? "Lulus" : "Tidak Lulus";
