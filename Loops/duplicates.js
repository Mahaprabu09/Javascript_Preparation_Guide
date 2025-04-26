let number=[1,2,3,4,3,2,4,4,5,6];

let duplicates=[];

for(let i=0;i<number.length;i++){
    for(let j=i+1;j<number.length;j++)
       if(number[i]===number[j]){
        if(!duplicates.includes(number[i])){
            duplicates.push(number[i])
        }
       }
}

console.log(duplicates)