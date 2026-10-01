// Find longest and smallest element from an array


function findLonandSmallEle(arr=[]) {

    let lar=arr[0]
    let smal=arr[0]
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if(element>lar) lar =element
        if (element<smal) smal=element
    }
    return {smallest:smal,largest:lar}
}

const output=findLonandSmallEle([1,2,3,4,5,6,0,-1,12])
console.log("output",output)