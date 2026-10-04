function moveAllZeroEnd(arr=[]) {
    let nonZero=0
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if(element!==0){
            arr[nonZero]=element
            nonZero++
        }
    }
    for (let index = nonZero; index < arr.length; index++) {
        arr[index]=0
        
        
    }
    return arr
}


console.log("lllll",moveAllZeroEnd([1,2,0,3,4,0,0,5,6,0]))