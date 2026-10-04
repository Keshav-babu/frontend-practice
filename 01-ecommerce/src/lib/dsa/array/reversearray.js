function reverseArr(arr=[]) {
    let left = 0
    let right=arr.length-1
    while (left<right) {
        const temp=arr[left]
        arr[left]=arr[right]
        arr[right]=temp
        left++
        right--
    }
    
    return arr;
}

console.log("arrrreverse",reverseArr([1,2,1,2,3,4,5]))