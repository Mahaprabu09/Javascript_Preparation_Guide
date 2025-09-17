//Leetcode 1071
function gcd_str(str1,str2){
    let a=str1.length;
    let b=str2.length;

    //gcd while loop
    while(b!==0){
       [a,b]=[b,a%b];
    }
    // if(str1+str2 !== str2+str1){
    //     return "";
    // }
    return str1.substring(0,a);

}
let str1="ABCABCABC";
let str2="ABC";
console.log(gcd_str(str1,str2));