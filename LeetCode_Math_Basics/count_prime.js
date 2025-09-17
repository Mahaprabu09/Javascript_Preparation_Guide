function count_prime(n){
    let count=0;
    for(let i=1; i<n.length; i++){
        if(i==2 || i%3==0){
            count++;
        }
    }
    return count;
}
let num=10;
console.log(count_prime(num));