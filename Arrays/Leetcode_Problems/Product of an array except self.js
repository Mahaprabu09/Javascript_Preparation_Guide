// let n = [1, 2, 3, 4];

// function productOfArray(n) {
//     let res = new Array(n.length).fill(1);
    
//     let left = 1;
//     for (let i = 0; i < n.length; i++) {
//         res[i] = left;
//         left *= n[i];
//     }

//     let right = 1;
//     for (let i = n.length - 1; i >= 0; i--) {
//         res[i] *= right;
//         right *= n[i];
//     }

//     return res;
// }

// console.log(productOfArray(n));

let arr = [1, 2, 3, 4];
let results = [];

for (let i = 0; i < arr.length; i++) {
  let product = 1;
  for (let j = 0; j < arr.length; j++) {
    if (i !== j) {
      product *= arr[j];
    }
  }
  results.push(product);
}

console.log(results);