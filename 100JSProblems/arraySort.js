// Write a function that sort a numbers array in ascending orders. 

const arraySortAsce = (arr) => {

    // Method 1 

    for(let i = 0; i <arr.length-1; i++) {
        for(let j = i+1; j<arr.length; j++) {
            let temp;

            if(arr[i]>arr[j]){
                temp = arr[j];
                arr[j] = arr[i];
                arr[i] = temp
            }
        }
    }
    return arr;
    // ===============================

    
    // Method 2
    // arr.sort((a,b) => a-b)
    // return arr;

}
console.log(arraySortAsce([5,8,4,3,6,7,12,1]))