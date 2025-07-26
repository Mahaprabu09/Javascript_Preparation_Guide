console.log("firstname and lastname");

const userNameData = ["Maha","Prabu"];

const firstName =userNameData[0];
const lastName = userNameData[1];
console.log("Method 1 to print firstname and lastname:");
console.log(firstName+lastName);

const [fname, lname] = ["jim","rohn"];
console.log("Method 2 to print:");
console.log(fname+lname);

console.log("Method 3 to print:");
const user ={
    name:"albert",
    age:"23",
    work:"software engineer"
};

const Ename = user.name;
const Eage = user.age;
const Ework = user.work;

console.log(Ename+" "+Eage+" "+Ework);

console.log("Method 4 to print:");

const {name: username,age: userage,work: userwork} ={
    name:"arul",
    age:33,
    work:"Software engineer"
}
console.log(username,userage,userwork);

console.log("Method 4.1 to print:");
const {name: Lname,age:Lage,work:Lwork} = {
    name:"hema",
    age:24,
    work:"software engineer"
}

console.log(Lname,Lage,Lwork);

// For example, if a function accepts a parameter that 
// will contain an object it can be destructured to "pull out" the object properties and make them available as locally scoped variables 
// (i.e., variables only available inside the function body).


function storeOrder(order){
    localStorage.setItem('id',order.id);
    localStorage.setItem('currency',order.currency);
}

