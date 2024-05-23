// map method 

// const nums = [1,2,3,4,5]

// const multiplyThree = nums.map((num, i, arr)=> {
//     console.log(i , arr)
//     return num*3
// })

// console.log(multiplyThree)

// ==================================================================

// filter method

// const nums = [1,2,3,4,5]

// const moreThanTwo = nums.filter((num)=> {
//     return num>2
// })

// console.log(moreThanTwo)

// =====================================================================

// reduce method 

// const nums = [1,2,3,4,5]

// const sum = nums.reduce((acc, curr)=> {
//     return acc + curr
// })

// console.log(sum)

// ========================================================================

// Polyfills of map()

// Array.prototype.myMap = function(cb) {
//     let temp = [];
//     for(let i=0; i< this.length; i++){
//         temp.push(cb(this[i], i, this));
//     }
//     return temp
// }

// use of map polyfills

// const nums = [1,2,3,4];

// const multipltThree = nums.myMap((num, i, arr) => {
//     return num*3
// })

// console.log(multipltThree)

// =========================================================================

// Polyfills of filter() 

// Array.prototype.myFilter = function(cb) {
//     let temp = []

//     for(let i = 0; i<this.length; i++){
//         if(cb(this[i], i, this)){
//             temp.push(this[i]);
//         }
//     }
//     return temp
// }

// // use of filter polyfills

// const nums = [1,2,3,4,5]

// const moreThanTwo = nums.myFilter((num) => {
//     return num > 2
// })

// console.log(moreThanTwo)

// ==========================================================================

// Polyfill for reduce () 

// Array.prototype.myReduce = function (cb, initialValue) {
//     var accumulator = initialValue

//     for (let i = 0; i < this.length; i++) {
//         accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i];
//     }
//     return accumulator;
// }

// // use of myReduce 

// const nums = [1,2,3,4,5]

// const sum = nums.myReduce((acc, curr, i, arr) => {
//     return acc+curr;
// }, 0)

// console.log(sum)

// Chaining with Map() 

const nums = [1,2,3,4,5]

const mapResult = nums.map((arr) => {
    return arr + 2 ;
}).filter((arr)=> {
    return arr > 3
}).reduce((acc, curr) => {
    return acc + curr
})

console.log(mapResult)