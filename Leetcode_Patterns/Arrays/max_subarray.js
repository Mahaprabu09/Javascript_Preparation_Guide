var maxSubArray = function(nums) {
    let maxSum=nums[0];
    let currentSum=nums[0];
    for(let i=1;i<nums.length;i++){
        // Choose between extending the current subarray or starting fresh
        currentSum = (currentSum + nums[i]> nums[i]) ? currentSum+nums[i]:nums[i];

        //Update maxSum
        if(currentSum>maxSum){
            maxSum=currentSum;
        }
    }
    return maxSum;
    
};
let nums=[-2,1,-3,4,-1,2,1,-5,4]
console.log(maxSubArray(nums));         