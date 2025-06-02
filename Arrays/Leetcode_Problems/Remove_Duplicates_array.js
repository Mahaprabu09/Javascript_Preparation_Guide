
// function RemoveDuplicates(arr){
//     let i=0;
//     let uniques=[];
//     for(let j=1; j<arr.length; j++){
//         if(arr[j] !== arr[i]){
//             i++;
//             arr[i] = arr[j];
//         }
//     }
  


//     for(let k=0; k<=i;k++){
//         uniques[k]=arr[k];
//     }

//       return i+1;
// }

// let arr = [2,2,3,4,5,5,8,8,8];
// let length = RemoveDuplicates(arr);
// console.log("Duplicates counts:"+length);

/**
 * @param {number[]} nums
 * @return {number}
 */

function RemoveDuplicates(arr){
    let i=0;
    for(let j=1; j<arr.length; j++){
        if(arr[j] !== arr[i]){
            i++;
            arr[i] = arr[j];
        }
    }
    let k=i+1;
    let output = "";
    for(let x=0; x<k; x++){
        output += arr[x];
        if(x !== k-1){
            output += ",";
        }
    }
    console.log("["+output+"]");  
    return k;
}

let arr=[2,2,3,4,5,5,5,6,7,7,8];
console.log(RemoveDuplicates(arr));