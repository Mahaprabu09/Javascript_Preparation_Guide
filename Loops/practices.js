// for(let i=1;i<=5;i++){
//     console.log(i);
// }

console.log("for of :")
//Used to iterate over values of an iterable object like arrays, strings, etc.
let fruits = ["apple","banana","orange"]
for(let fruit of fruits){
    console.log(fruit)
}
console.log("Tranditional for loop")

console.log("Looping In-Order")
for(let i=0;i<fruits.length;i++){
    console.log(fruits[i])
}

console.log("Looping Backwards")
for(let i=fruits.length-1;i>=0;i--){
    console.log(fruits[i]);
}

console.log('for....in loop')
//Used to iterate over keys (property names) of an object (or index numbers for arrays).

const person={name:"mahaprabu",age:30,city:"los angeles"};

for(const key in person){
    console.log(key+" :"+person[key]);
}

console.log("forEach method:");
// forEach() method (Array-specific)
// Executes a provided function once for each array element.

let numbers=[23,34,2,11,77,35,22];
numbers.forEach(function(numlist){
   console.log(numlist);
});

let strNames=["albert","prabu","hema","yogesh","jaan"];
strNames.forEach(function(names){
    console.log(names);
});

console.log("forEach Method using arrow => function:")

strNames.forEach(nameslist => console.log(nameslist) );

let oneToten=["one","five","six","seven","ten"];

oneToten.forEach(oneten => console.log(oneten));

