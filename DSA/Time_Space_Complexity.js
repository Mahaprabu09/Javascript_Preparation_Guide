function double(arr){
    let newArr=[];
    for(let i=0;i<arr.length;i++){
        newArr.push(2 * arr[i]);
    }
    return newArr;
}

let arr=[1,2,3];
double(arr);
console.log("Double values :"+double(arr))