function checkarrissorted(arr=[]) {

    for (let i = 0; i < arr.length-1; i++) {
        const element = arr[i];
        if (element<=arr[i+1]) {
            continue
        }
        return false
        
    }

    return true
    
}

console.log("lllll",checkarrissorted([1,2,3,4,5,6,6,"kwjrfei"]))