// Legal Shadowing 

// function test () {
//     let a = "hello"

//     if(true){
//         let a = "hi";
//         console.log(a)
//     }
//     console.log(a)
// }

// test ()

// ----------------------------------------------------

// Illegal Shadowing  

// function test () {
//     var a = "Hello";
//     let b = "Hi";

//     if(true) {
//         let a = "Bye";
//         var b = "Good Bye"

//         console.log(a)
//         console.log(b)
//     }
// }

// test ()