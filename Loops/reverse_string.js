function Reverse_str(str){
    let reverse="";
    for(let i=str.length-1; i>=0; i--){
        reverse += str[i];
    }
    return reverse;
}
let str="mahaprabu";
console.log(Reverse_str(str));