var removeDuplicates = function(nums) {
    if (nums.length === 0) return 0;

    let i = 0; // slow pointer — index of last unique element

    for (let j = 1; j < nums.length; j++) { // fast pointer scans
        if (nums[j] !== nums[i]) {
            i++;
            nums[i] = nums[j];
        }
    }

    let k=i+1;

   
    console.log(nums.slice(0, k)); 
    return k; // number of unique elements
};


// Example
console.log(removeDuplicates([5,5,4,22,22,6,6,8,7]));
