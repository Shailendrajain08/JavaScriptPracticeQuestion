// Write a JavaScript function that reverses a number. without inbuilt function

// function reverseNumber(num) {
//   // Convert number to string
//   var numStr = num.toString();
//   // Split string into array
//   var numStrArr = numStr.split('');
//   // Reverse the array
//   var reversedArr = numStrArr.reverse();
//   // Join array back into a string
//   var reversedStr = reversedArr.join('');
//   // Convert the string back to a number
//   var reversedNum = Number(reversedStr);
//   // Return the reversed number
//   return reversedNum;
// }

// console.log(reverseNumber(12345)); // Output: 54321


// without inbuilt function 


function reverseNumber(num) {
    let reversed = 0;
    while (num > 0) {
      reversed = (reversed * 10) + (num % 10);
    //   console.log(reversed)
      num = Math.floor(num / 10);
    }
    return reversed;
  }
  
  console.log(reverseNumber(12345)); // 54321