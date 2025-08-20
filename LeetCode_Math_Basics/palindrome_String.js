function Str_palindrome(str){
    let original=str;
    let reverse="";
    for(let i=str.length-1; i>=0; i--){
        reverse+=str[i];
    }
    console.log(reverse);
    return reverse===original;
}
let str="racecar";
console.log(Str_palindrome(str));

