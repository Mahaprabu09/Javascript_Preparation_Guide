function greet(){
    console.log("Hello!");
}

greet();
greet();
greet();


function information(userName, userMessage){
    console.log(userName);
    console.log(userMessage);
}
information("Max", "How are you");


console.log("arrow functions:");

export default(userName, userMessage) => {
  console.log("Hello");
  console.log(userName," + "+userMessage);
}





