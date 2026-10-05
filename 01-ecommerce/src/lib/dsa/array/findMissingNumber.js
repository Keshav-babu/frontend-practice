// Input: arr[] = [8, 2, 4, 5, 3, 7, 1]
// Output: 6
// Explanation: All the numbers from 1 to 8 are present except 6.

function findMissingNum(arr=[]) {
    for (let i = 1; i < arr.length; i++) {
       let found=false
       for (let j = 0; j < arr.length; j++) {
        const element = arr[j];
        if(element==i){
            found =true
            break;
        }
       }
       if (!found)
            return i;
    }
    return -1
}

console.log("lll",findMissingNum([1,2,3,5,6,7]))

// Formula from 1toN number ka sum (than sub arrayelement sum)
// formula = (n * (n + 1)) / 2;

function findMissingNum2(arr=[]) {
    const n = arr.length+1
    const sum= (n * (n + 1)) / 2;

    const sum2=arr.reduce((acc,curr)=>{
        return acc+curr
    },0)
    return sum-sum2
}
console.log("lll",findMissingNum2([1,2,3,5,6,7]))


// XOR approach
