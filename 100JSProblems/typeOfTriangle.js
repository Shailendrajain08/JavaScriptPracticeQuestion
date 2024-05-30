// Write a js function that takes 3 prameters and finds triangle is "equilateral", "isosceles" or "scalence".

const checkTriange = (a, b, c) => {
    if (a === b && b === c) {
        return "equilateral";
    } else if (a === b || b === c) {
        return "isosceles";
    } else {
        return "scalence"
    }
}

console.log(checkTriange(4, 4, 4))