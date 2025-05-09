// function maxRepeatedNumber(arr) {
//     let freq = {};
//     let maxCount = 0;
//     let mostRepeated = null;

//     for (let num of arr) {
//         freq[num] = (freq[num] || 0) + 1;

//         if (freq[num] > maxCount) {
//             maxCount = freq[num];
//             mostRepeated = num;
//         }
//     }

//     return mostRepeated;
// }

// let numbers = [1, 3, 2, 1, 4, 1, 3, 3, 3, 3];
// console. log("Most repeated number:", maxRepeatedNumber(numbers));


function majorityoccur(arr){
    let freq = {};
    let maxCount = 0;
    let mostRepeated = 0;

    for(let num of arr){
        freq[num] = (freq[num] || 0) +1;
        if(freq[num] > maxCount){
            maxCount = freq[num];
            mostRepeated = num;
        }
    }
    return mostRepeated;
}
let arr = [1, 3, 2, 1, 4, 1, 3, 3, 3, 3];
console.log(majorityoccur(arr))
