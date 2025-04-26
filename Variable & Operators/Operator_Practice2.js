console.log("Javascript Full Operator Guide + Exercises")

let a=9;
let b=7;
console.log("Value of A:"+a+" Value of B:"+b)
console.log("Addition:",a+b);
console.log("Subtraction:",a-b);
console.log("Multiplication:",a*b);
console.log("Division:",a/b);
console.log("Remainder:",a%b);
console.log("Exponent:",a**b);

console.log("a++ :",a++)
console.log("Incremented a:", a)
b--;
console.log("Decremented B:", b)


console.log("Assignment Operators:")

let x=6;
x+=4;
console.log("x after +=3:",x)
x*=2;
console.log("x after *=2",x)
x-=4;
console.log("x after -=4:",x)
x+=13;
x%=2;
console.log("x after %=2 reminder",x)
x+=24;
console.log("X+=24:",x)
x/=3;
console.log("x/=3",x)

console.log("comparison Operators:")

let aa=8;
let bb="8";
console.log(aa==bb);
console.log(aa===b);// due to type check it is false 
console.log(aa!=bb);
console.log(aa!==bb)
console.log(aa>bb)
console.log(aa<=bb)

console.log("logical Operators:")
let isStudent = true
let hasID = false
let isAdult = true

console.log(isStudent && hasID)
console.log(isStudent || hasID)
console.log(!hasID)
console.log(isStudent == isAdult)
console.log(isAdult!=hasID)


console.log("logical Operators:")
let firstName = "John";
let lastName ="Doe";
console.log(firstName ,lastName);

let age3=20;
let surname="Mahaprabu";
console.log(surname+" Age: "+age3);


console.log("Type operators:")
console.log(typeof 12)
console.log(typeof "Maha")

console.log("Sample exercises:")

let num1=7;
console.log(num1%2===0? "Even":"Odd");

let marks =85;
let grade = marks >=90? "A":
            marks >=75? "B":
            marks >=60? "C":"D";
console.log("Mahaprabu :"+grade);


console.log("Ternary Operator:")
let myage1= 21;
let result1= (myage1>=21) ? "Adult" : "Minor";
console.log(result1);

console.log("Terynary Operator Example 1:")
let feverCondition=4;
let feverReport=(feverCondition>4) ? "Positive" : "Negative";
console.log("Final Fever Report is : "+feverReport)


let humanage=55;
let isHumanOlder= humanage >=50 ? "Yes":"No";
console.log("Is human is older: ",isHumanOlder)

let hisName="Maha"
let hisNameisMaha= hisName=="Maha" ? "Yes":"No"
console.log("does his name is maha:"+hisNameisMaha)



console.log("Boolean logic check:")
let loggedIn = true;
let emailVerified = false;
let logger1=false
let logger2=true
let number1=3;
let number2=4;
console.log(loggedIn && emailVerified)
console.log(loggedIn || emailVerified)
console.log(number1<=number2)
if(!logger1){
    console.log("please login your profile");
}

if(!logger2){
    console.log("Logger2 content")
}else{
    console.log(logger2)
}

console.log("swap variables:")
let a1=5, a2=20;
[a1,a2] = [a2,a1];
console.log("a:",a1,"b:",a2);

console.log("Swap variable example1:")
let c1=34;
let c2=22;
[c1,c2]=[c2,c1];
console.log("c1:",c1,"c2:",c2)







