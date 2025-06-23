//FUNCTIONS

//regular functions

// function greet(){
//     console.log("Hi!, Good Afternoon");
// }
// greet();

//IIFE immediately invoked function expression

// (function greet() {
//     console.log("Hola");
// })();

// //Arugument(passed value) and parameters(function variable)
// function add(a,b){
//     console.log(a+b);
// }
// add(4,5);

// //Returning values from functions
// function add(a,b){
//    return a+b;
// }
// const result = add(4,5);
// console.log(result);

//arguments object contains all the arguments passed to a function
function add(a,b){
    //shows only two
    console.log(a,b);
    //shows all
    console.log(arguments);
    console.log(arguments[0]);
}
add(4,5,9);

