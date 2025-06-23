//CALLBACK FUNCTIONS
// A callback function is a function that is passed as an argument to another function in a primary way to allow asynchonous execution.
// const f1 =()=>{
//     console.log("hi");
// };
// const main =(x) =>{
//     x();
// }
// main(f1);


const f1=10;
const main =(x) =>{
    // x can't be called as a function here because f1 iss not a function, it's a number
    //x(); will throw an error
    console.log(x);
};
main(f1);