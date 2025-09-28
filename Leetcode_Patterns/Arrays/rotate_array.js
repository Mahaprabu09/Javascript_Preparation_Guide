var rotate = function(nums, k) {
    k = k % nums.length;

    function reverse(start, end) {
        while (start < end) {
            [nums[start], nums[end]] = [nums[end], nums[start]];
            start++;
            end--;
        }
    }   
    reverse(0, nums.length - 1);
    reverse(0, k - 1);
    reverse(k, nums.length - 1);

    return nums; // 👈 added
};

let nums = [1,2,3,4,5,6,7], k = 3;
console.log(rotate(nums,k)); // [5,6,7,1,2,3,4]
