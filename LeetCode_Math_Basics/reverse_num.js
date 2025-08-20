function reverse_num(num){
    let reverse=0;
    if(num==0){
        return 0;
    }
    while(num>0){
        let digit=num%10;
        reverse=reverse*10 + digit;
        num=Math.floor(num/10);
    }
    return reverse;
}
let num=45676;
console.log(reverse_num(num));
