 let thnums = [-1,0,1,2,-1,-4]
 let thtarget= 0
 let thparevalues = []
 let thindex =[]
 
for(let i=0; i < thnums.length ; i++){
    for(let j =i+1; j < thnums.length; j++ ){
        for(let k =j+1; k < thnums.length; k++){
            if(thtarget === thnums[i]+thnums[j] + thnums[k] ){
                thparevalues.push([thnums[i],thnums[j],thnums[k]])
                thindex.push([i,j,k])
            }
        }
    }
}
console.log("three sum index",thindex)
console.log("three sum value",thparevalues)

