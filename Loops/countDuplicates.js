console.log("Count duplicates in javascript")

let array=[2,2,2,3,43,5,2,6,7,5,6,5,1,9,8,8,24,24]

let noOfDuplicates=[]

// for(let i=0;i<=array.length;i++){
//     for(let j=i+1;j<=array.length;j++){
//         if(array[i]===array[j] && !noOfDuplicates.includes(array[i])){
//             noOfDuplicates.push(array[i])
//         }
//     }
// }


for(let i=0;i<array.length;i++){
    for(let j=i+1;j<array.length;j++){
        if(array[i]===array[j] && !noOfDuplicates.includes(array[i])){
            noOfDuplicates.push(array[i])
        }
    }
}
console.log(noOfDuplicates)