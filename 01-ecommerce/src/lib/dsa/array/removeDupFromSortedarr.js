function removeDupFromSortedArr(arr=[]) {
    let lastWhereDup=1
    for (let i = 1; i < arr.length; i++) {
        const element = arr[i];
        if(element!==arr[i-1]){
            arr[lastWhereDup]=element
            lastWhereDup++
        }
    }
    for (let i = lastWhereDup; i < arr.length; i++) {
        arr[i]=undefined
    }
    return arr
}


console.log("lll",removeDupFromSortedArr([1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,3,3,4,4,5]))
