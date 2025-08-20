function power_of_two(n){
    
        if(n<=0){
            return false;
        }
        return (n&(n-1))===0;
}

let n=8;
console.log(power_of_two(n));