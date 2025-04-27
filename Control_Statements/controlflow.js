console.log("Control FlowStatement:")

let grade =75;

if(grade>=90){
  console.log("A");
}else if(grade>=80){
  console.log("B");
}else if(grade>=70){
  console.log("C")
}else{
  console.log("D")
}

//Write a program that checks if a number is 
// positive, negative, or zero.

let numcheck=-1;

if(numcheck>=1){
    console.log("positive number")
}else if(numcheck<=1){
    console.log("Negative number")
}else{
    console.log("No number - null")
}

//Use a switch to return a message 
// based on the day of the week.

let day;
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case  6:
    day = "Saturday";
}
console.log(day)


let color="red";

switch(color){
  case "red":
    console.log("color is red");
    break;
  case "blue":
    console.log("color is blue");
    break;
  default:
    console.log("Unknown Color");
}
