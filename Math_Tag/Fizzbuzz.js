
let n=5;


function fizzbuzz(n){
    let result=[];
    for(let i=1; i<=n; i++){
        if(i % 3 === 0 && i % 5 === 0 && i!== 0){
            result.push('fizzbuzz');
        }
        else if(i % 3 === 0 ){
            result.push('fizz');
        }
        else if(i % 5 === 0){
            result.push('buzz');
        }
        else{
            result.push(i.toString())
        }
    }
    return result;
}

console.log("Result of fizzbuzz:"+ fizzbuzz(n));
