function sum(num){
    let total=0;
    for(let i=0; i<num.length; i++){
        total += num[i];
    }
    return total;
}

let number=[1,2,3,4,5];
console.log(sum(number));