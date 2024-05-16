// function closure () {
//     let a = 2;
//      function closure2 () {
//         console.log(a);
//         let b = 8
//          function closure3() {
//             console.log(b);   
//         }
//         return closure3()
//     }
//     return closure2()
// }
// closure()

// closure with var 

// function x() {
//     for(var i = 1; i <= 5; i++) {
//         setTimeout(function () {
//             console.log(i)
//         }, i * 1000)
//     }
// }x();

// closure with let 
// function y() {
//     for(let i = 1; i <= 5; i++) {
//         setTimeout(function () {
//             console.log(i)
//         }, i * 1000)
//     }
// }y();


// for proper output with var 
function x() {
    for(var i = 1; i <= 5; i++) {
        function close(i){
            setTimeout(function () {
                console.log(i)
            }, i * 1000)
        }
        close(i)
    }
}x();