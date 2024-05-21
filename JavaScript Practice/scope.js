// global scope example 

// let a = 5 ;

// function abc () {
//     console.log(a)
// }

// {
//     console.log(a)
// }

// abc()

// ==================================================

// block scope example 

// {
//     let a = 5;
//     let b = 10;
//     console.log(a)
// }

// // console.log(b)

// let and const are block scope if you use var it will not throgh any error 

// =======================================================

// function scope example 

function abc () {
    var a = 5;
    let b = 10;
    const c = 15
    // console.log(a)
    // console.log(b)
    // console.log(c)
}

    // console.log(a)
    // console.log(b)
    // console.log(c)

    console.log(abc ())

    // console.log(a)
    // console.log(b)
    // console.log(c)
