// write a javascript data to find 4th largest value from the array.


// let array = [1,3,6,2,7,9,8,10,4,5];

// let sortedArray = array.sort((a,b) => b-a);
// let fourthLargest = sortedArray[3];

// console.log(fourthLargest); //7

// without an inbuilt method

let arr = [2,7,5,9,3,6,8,4,1];
let largest = arr[0];
let secondLargest = arr[0];
let thirdLargest = arr[0];
let fourthLargest = arr[0];

for(let i=0; i<arr.length; i++){
    if(arr[i] > largest){
        fourthLargest = thirdLargest;
        thirdLargest = secondLargest;
        secondLargest = largest;
        largest = arr[i];
    }
    else if(arr[i] > secondLargest){
        fourthLargest = thirdLargest;
        thirdLargest = secondLargest;
        secondLargest = arr[i];
    }
    else if(arr[i] > thirdLargest){
        fourthLargest = thirdLargest;
        thirdLargest = arr[i];
    }
    else if(arr[i] > fourthLargest){
        fourthLargest = arr[i];
        
    }
}

console.log(fourthLargest)