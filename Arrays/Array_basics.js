// What is an Array?
// A data structure that holds a list of items, accessible by index. 

console.log("Array index print");
let arr=[1,3,4,5,6,8];
console.log(arr[3]);

console.log("Array empty array print");
let arr1 = [];
let arr2 = new Array(5);

console.log(" Core Methods (MUST Know)")
let arrayMain = [1,2,3,5,6,3,5,6,6];
arrayMain.push(8);
console.log("arrayMain push test : "+arrayMain)
arrayMain.pop();
console.log("array Pop Test : "+ arrayMain)
arrayMain.shift();
console.log("Arraymain shift test : "+arrayMain);
arrayMain.unshift(7);
console.log("arraymain Unshift :"+arrayMain)

console.log("splice(): Add/Remove at any index");
let arrayTest1 = [3,5,6,7,9];
arrayTest1.splice(0,0,1,2);
console.log("Splice Example : "+arrayTest1);
arrayTest1.splice(5,0,8);
console.log(arrayTest1);


console.log("Remove elements using splice:")
arrayTest1.splice(4,4);
console.log("splice Removed result : "+arrayTest1);


console.log("slice(): Returns a shallow copy (does NOT change original)");
let arrayTest2 = [1,2,3,4,5,6,7,8,9,10];
console.log(arrayTest2);
let sliced=arrayTest2.slice(4,7);
console.log("sliced : "+sliced)
console.log("Unchanged : "+arrayTest2)

console.log("concat(): Merge arrays");
let merged = arrayTest1 + arrayTest2;
console.log("Merged :"+merged);
let merged1 = arrayTest1.concat(arrayTest2);
console.log("Merged1 Sample :"+merged1);

console.log("indexOf(): Find the first index of a value")
let testarray1 = [33,44,21,12,32,11,9];
console.log(testarray1.indexOf(12));

console.log("includes(): Check if array contains value");
console.log(testarray1.includes(32));
console.log("checking includes again :",testarray1.includes(9));

console.log(" join(): Convert array to string")

let testarray2 = [33,44,21,12,32,11,9];
console.log(testarray2.join());
console.log(testarray2.join("-"));

console.log("reverse(): Reverse the array in place");
let testarray3 = [33,44,21,12,32,11,9,2,1,3,4,56,67];
testarray3.reverse();
console.log(testarray3);

console.log("Arrow functions : ")
let a1 =5;
let b1 =10; 
let c1 =35;

let ab=( a1 , b1) => a1 + b1;
console.log("ab addition :"+ab(53,12));

let abc = (a1,c1,b1) => (a1 + c1 + b1);
console.log("abc addition "+abc(5,10,35));

const nums = [3, 1, 4, 2];
nums.sort((a, b) => a - b);
console.log(nums); // Output: [1, 2, 3, 4]


const nums1 =[ 15,11,12,16,17,18,9];
nums1.sort((s1, s2) => s1 - s2);
console.log(nums1);
