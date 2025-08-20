var sumOddLengthSubarrays = function(arr) {
    let n = arr.length;
    let sum = 0;

    for (let i = 0; i < n; i++) {
        let totalSubarrays = (i + 1) * (n - i);                                                                                     
        let oddCount = Math.floor((totalSubarrays + 1) / 2);
        sum += arr[i] * oddCount;
    }
    return sum;
};

let n=[1, 4, 2, 5, 3];
console.log(sumOddLengthSubarrays(n));