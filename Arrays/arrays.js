console.log("Sorting in number, objects, by comaring values:")

console.log("Basic sorting using strings:")
const fruits = ['banana','apple','cherry'];
fruits.sort();
console.log(fruits);


console.log("Sorting Number:")
const number=[3,8,1,2,78,5,32,11];
number.sort((a,b) => a-b);
console.log(number)