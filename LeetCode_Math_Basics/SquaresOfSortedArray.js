var sortedSquares = function(nums) {
    let n = nums.length;
    let res = new Array(n);   // result array
    let left = 0;             // start pointer
    let right = n - 1;        // end pointer
    let pos = n - 1;          // position to fill in res (from end)

    while (left <= right) {
        if (Math.abs(nums[left]) > Math.abs(nums[right])) {
            res[pos] = nums[left] * nums[left]; // square left
            left++;                             // move left pointer
        } else {
            res[pos] = nums[right] * nums[right]; // square right
            right--;                              // move right pointer
        }
        pos--;  // move result position backwards
    }
    return res;
};

let nums = [-4, -1, 0, 3, 10];
console.log(sortedSquares(nums))
