let nums=[0,1,0,3,12];

function moveZeroes(nums) {
    // create a new array to store non-zero elements
    let result = [];
    
    // first, add all non-zero elements to the new array
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            result.push(nums[i]);
        }
    }
    
    // calculate how many zeros are needed
    let zeroCount = nums.length - result.length;
    
    // append the zeros to the new array
    for (let i = 0; i < zeroCount; i++) {
        result.push(0);
    }
    
    // copy the result array back to the original array
    for (let i = 0; i < nums.length; i++) {
        nums[i] = result[i];
    }

}
console.log("Original array :"+nums)
let result = moveZeroes(nums)
console.log("Result :"+nums);