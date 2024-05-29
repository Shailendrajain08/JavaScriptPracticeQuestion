// Write a js function findLongestWord that take a string as input and returns the longest word in the string. if there are multiple longest words return the first on encountered . 

const findLongestWord = (str) => {
    if (str.trim().length === 0) {
        return false
    }
    
    let words = str.split(" ");


    // *method 1
    // words = words.sort((a,b) => b.length-a.length)
    // return words[0]

    // *method 2

    return words.reduce((acc, currVal) => (
        currVal.length > acc.length ? currVal : acc
    ), ""
);
}

const str = "zebra junction amplify ribbon telescope quiver island navy orbit kettle mosaic vivid quantum"

console.log(findLongestWord(str))