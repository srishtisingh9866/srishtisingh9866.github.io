//MAP
/*
//For each
const scores= [2,1,7,5,3];
//using arrow function
//you can give values and index along with arrays 
// scores.forEach((value)=>{
//     console.log(value);   
// });
scores.forEach((a,b,c)=>{
    console.log(c[b]);
});
*/
//Map is used to create an array of new and modified values
//purpose is to get a new array from a existing array
//for example when we search in search box in a wwebsite
//the presented product is desrived from the esisted catalogue
//works the same;

const scores= [2,1,7,5,3];
// scores.map((value)=>{
//     console.log(value);
// });

// const newScore = scores.map((value)=>{
//     return value+5;
// [ 7, 6, 12, 10, 8 ]
// });

// const newScore = scores.map((value)=>{
//     return 5;
// [ 5, 5, 5, 5, 5 ]
// });

// const newScore = scores.map((value)=>{
//     return value > 2;
//     //output: [ false, false, true, true, true ]
// })


//FILTER is used to filter out the elements from an array based on a condition
// const newScore = scores.filter((value)=>{
//     return value > 2;
//     //output: [ 7, 5, 3 ]
// })

//FIND is used to find the element from an array based on condtition
// const newScore = scores.find((value)=>{
//     return value === 2;
//     //output: [ 7, 5, 3 ]
// })

//REDUCE is used to reduce to single  value
const newScore = scores.reduce((sum,value)=> sum+value,0)
console.log(newScore);
