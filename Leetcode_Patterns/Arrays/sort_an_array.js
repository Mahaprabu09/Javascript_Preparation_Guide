console.log("Step 1 sorting without inbuilt function")
function sortArray(nums){

    for(let i=0; i<nums.length; i++){
        for(let j=i+1; j<nums.length; j++){
            if(nums[i] > nums[j]){
                let temp=nums[i];
                nums[i]=nums[j]
                nums[j]=temp;
            }
        }
    }
    return nums;
}

let nums=[3,5,6,2,4,9];
console.log("before sort:",nums);
console.log("after sort :",sortArray(nums))


console.log("Step 2 to sort using inbuilt function");

let nums1=[6,3,2,1,2,6,7,8]
function inbuiltSort(nums1){
    nums1.sort();
    return nums1;
}
console.log(inbuiltSort(nums1));