// Find Second largest element of an array

function secondLargest(arr = []) {
  let largest = arr[0];
  let secondlargest=Number.NEGATIVE_INFINITY;
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (element > largest) largest = element;
  }
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if(element==largest) continue
    if(element>secondlargest) secondlargest=element
    
  }
  return {secondlargest}
}
const seonclargest=secondLargest([1,2,3,4,5,612,-21,1])

console.log(seonclargest)


// Another approach
// so when we traverse thorugh array while finding the largest element so before we find the largest element we must have visited it's second largest [1,2,3,4,5]
// here 5 is max it mean prev we have 4 than we get 5 that is more than 4 so 

//

function secondlargestanotherapproach(arr=[]) {

    let largest=Number.NEGATIVE_INFINITY;
    let secondlargest=Number.NEGATIVE_INFINITY;

    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if(element>largest){
            secondlargest=largest
            largest=element

        }else if(element>secondlargest && element<largest) {
            secondlargest=element
        }
        
        
    }
return secondlargest
    
}


console.log("llll",secondlargestanotherapproach([1,2,3,4,5,612,-21,1]))