function add_digits(num){
    while(num>=10){
        let sum=0;
        while(num>0){
            sum += num%10;
            num = Math.floor(num/10);
        }
        num=sum;
    }
    return num;
}
let n=38;
console.log(add_digits(n));
