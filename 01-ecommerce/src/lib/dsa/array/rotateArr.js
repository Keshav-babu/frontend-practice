
console.log("llll",rotateArrByK([1,2,3,4,5,6],2))


function rotateArrByK(arr = [], k = 0) {
    for (let i = 0; i < k; i++) {
        const n = arr.length - 1;
        const temp = arr[n];

        for (let j = n; j > 0; j--) {
            arr[j] = arr[j - 1];
        }

        arr[0] = temp;
    }

    return arr;
}

console.log("llll", rotateArrByK([1, 2, 3, 4, 5, 6], 2));


// [6,1,2,3,4,5]
// [5,6,1,2,3,4]
// [4,5,6,1,2,3]