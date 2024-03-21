// write a JS program to swap to number.

var a = 10;
var b = 20;


// With using third variable
var temp;
temp = a;
a = b;
b = temp;

console.log(`value of a is ${a} and  value of b is ${b}` )

// Without using third variable

var c = 30;
var d = 50;

c = c + d;
d = c - d;
c = c - d

console.log(`value of C is ${c} and  value of D is ${d}` )
