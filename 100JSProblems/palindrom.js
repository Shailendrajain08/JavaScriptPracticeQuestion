// Write a JavaScript function that checks whether a passed string is palindrome or not

// let palindrome = (str) => {
//     let reversedStr = str
//       .split("")
//       .reverse()
//       .join("");
//     return str === reversedStr;
//   };
  
//   console.log(palindrome("madam")); // true

//   without inbuilt function 

function checkPalindrome(str) {
    let reversedStr = '';
    for(let i = str.length - 1; i >= 0; i--) {
    console.log(str[i])
            reversedStr = reversedStr + str[i];
    }
    return reversedStr === str;
}

console.log(checkPalindrome('racecar')); // true
console.log(checkPalindrome('hello')); // false