// Write a JavaScript function that generates all combinations of a string

// This function takes in a string and uses recursion to generate all possible combinations of the string
const generateCombinations = (str) => {
    // base case, if string is empty
    if (str.length === 0) {
        return [""];
    }

    const result = [];

    // loop through the string
    for (let i = 0; i < str.length; i++) {
        // get the character at the current index
        const char = str[i];
        // split the string into two substrings
        const before = str.substring(0, i);
        const after = str.substring(i + 1);

        // recursively call the function on the two substrings
        const partials = generateCombinations(before + after);

        // loop through the returned array and append the character to each string
        partials.forEach(partial => {
            result.push(char + partial);
        });
    }
    // return the result
    return result;
};

console.log(generateCombinations("dog")); // ["abc", "acb", "b

// second method

// function substrings(str1)
// {
// var array1 = [];
//   for (var x = 0, y=1; x < str1.length; x++,y++) 
//   {
//    array1[x]=str1.substring(x, y);
//     }
// var combi = [];
// var temp= "";
// var slent = Math.pow(2, array1.length);

// for (var i = 0; i < slent ; i++)
// {
//     temp= "";
//     for (var j=0;j<array1.length;j++) {
//         if ((i & Math.pow(2,j))){ 
//             temp += array1[j];
//         }
//     }
//     if (temp !== "")
//     {
//         combi.push(temp);
//     }
// }
//   console.log(combi.join("\n"));
// }

// substrings("dog");