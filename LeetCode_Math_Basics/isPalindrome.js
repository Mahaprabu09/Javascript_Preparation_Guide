// A palindrome is a number, word, phrase, or sequence that reads the same forward and backward.

function isPalindrome(num){
    if( num < 0 ){
        return false;
    }

    let original = num;
    let reversed = 0;

    while ( num > 0){
        let digit = num % 10;
        reversed = reversed * 10 + digit;
        num = Math.floor(num/10);
    }
    return reversed === original;
}

let number = 121;  //121
console.log(isPalindrome(number));