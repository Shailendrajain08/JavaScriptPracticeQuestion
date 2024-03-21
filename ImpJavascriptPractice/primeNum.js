// program to print prime numbers between the two numbers

var lowerNumber = 8;
var heigherNumber = 96;

    for (let i = lowerNumber; i <= heigherNumber; i++) {
        let flag = 0;

        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                flag = 1;
                break;
            }
        }
        // if number greater than 1 and not divisible by other numbers
        if (i > 1 && flag == 0) {
            console.log(`The prime numbers between ${lowerNumber} and ${heigherNumber} are: ${i}`);
        }
    }