/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function threeSumClosest(nums, target) {
    nums.sort((a, b) => a - b);

    let ClosestSum=Infinity;

    for(let i=0; i < nums.length-1; i++){
        let left=i+1;
        let right=nums.length-1;

        while(left < right){
            let CurrentSum = nums[i] + nums[left] + nums[right];

        if(Math.abs(CurrentSum - target) < Math.abs(ClosestSum - target)){
            ClosestSum = CurrentSum;
        }
        if(CurrentSum < target){
            left++;
        }
        else{
            right--;
        }
    }
            
}

 return ClosestSum;
    
};

let nums = [-1, 2, 1, -4], target = 1
console.log(threeSumClosest(nums,target));