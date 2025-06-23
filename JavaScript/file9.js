//ARRAYS
const score = [2,1,7,5,3];
console.log(score);
//prinnting the length of an array
let length = score.length;
console.log(`length of array: ${length}`);
for(let i=0;i<length;i++){
    //printing each element by their indexces
    console.log(score[i]);
}
score.push(10);
//adding an element to the end of aa array
console.log(score);
//removing the last elemnt of an array;
score.pop();
console.log(score);
//removing the first elementof an array
score.shift();
console.log(score);

//adding an element to the g=beginning of an array
score.unshift(0);
console.log(score);

const newScore = [...score, 9];
console.log(newScore);
//will creat a new array b=with the elements of the previous score array
console.log(score);

// const cart= {
//     1:5,
//     5:3,
// };
// newCart = ({...cart, 2:9,4:89, 7:0});
// console.log(newCart);


//Array of Objects

let cart = {};
const products= [
    {
        id: 1,
        name: 'Product 1',
        price: 25.
    },{
        id: 2,
        name: 'Product 2',
        price: 50.
    },{
        id: 3,
        name: 'Product 3',
        price: 75.
    }
];
//using spread operator to add items to the cart
function addToCart (id){
    cart = {...cart, [id]: 1};
    console.log(cart);
    
}
function increaseQuantiy (id){
    cart[id]= cart[id]+1;
    console.log(cart);
}
function decreaseQuanty (id){
    cart[id]= cart[id]-1;
    console.log(cart);
}
newProducts = [...products, {id: 4, name:"Product 4", price: 100}];
// products.push({id: 4, name:"Product 4", price: 100});
// console.log(products);
addToCart(1);
addToCart(3);
increaseQuantiy(1);
decreaseQuanty(3);
console.log(cart);