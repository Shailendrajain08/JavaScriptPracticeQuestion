// Write a function that takes a string and generate Hash tag from that string. Length of the string should be less than 280 characters. 

// example = "My name is Shailendra"
// hashTag = "#MyNameIsShailendra"

const generateHash = (str) => {
    if (str.length > 280 || str.trim().length === 0) {
        return false
    }

    str = str.split(" ");
    str = str.map((curElem) => curElem.replace(curElem[0], curElem[0].toUpperCase()))
    console.log(str)
}

const str = "My name is shailendra jain"

console.log(generateHash(str))