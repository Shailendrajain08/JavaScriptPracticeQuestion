// write a function called charCount that takes two parameter: a string and a charcter. That function should count that how many time charcter present in that string. 

const charCount = (word, char) => {
    word = word.toLowerCase();
    char = char.toLowerCase();

    totalChar = word.split("").reduce((accue, curren) => {
        if(curren === char){
            accue ++
        }
        return accue
    }, 0)
    return totalChar
}

console.log(charCount("MissIssippi", "i"))