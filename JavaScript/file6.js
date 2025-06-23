//ARROW FUNCTIONS
// Arrow functions are a more concise syntax for writing functions in JavaScript

// greet (); //hoisting
// function gree() {
//     console.log("Hola");
// }

// x=10;
// console.log(x);
// var x; //hoisting
// //let and const do nothoist

//storing a function in a variable
// //hoisting does not work with arrow functions
// const greet = () => {
//     console.log("Hi!, Good Afternoon");
// };
// greet();

// const add = (a,b) =>{
//     console.log(a+b);
// };
// add(2,3);


// const add = (a,b) =>{
//   return(a+b);
// };
// const addition = add(2,3);
// console.log(addition);


//Spread Operator
const add = (...a) => {
    console.log(a[1]);
    console.log(a);
};
add(4,5,5,6,7,8,9,10)
// The spread operator (...) allows an iterable (like an array to be expanded in places where zero or more arguments are expected, such as in functions)
