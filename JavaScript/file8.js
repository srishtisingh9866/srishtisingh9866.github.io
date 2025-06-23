//OBJECTS

const student ={
    name: "Harsh",
    age: 21,
};
console.log(student);
console.log(student.name);
console.log(student["name"]);
//will create a new property if it doesn't exist
student.city = "delhi";
console.log(student);
student.city =  'mumbai';
console.log(student);
//will not create a new property but overwrite it

delete student.age;
console.log(student);
//will delete the property age

const keys= Object.keys(student);
console.log(keys);
//will return an array of keys in the object

const values = Object.values(student);
console.log(values);
//will return an array of values in the object

const entries = Object.entries(student);
console.log(entries);
//will return an array of key-value pairs in the object

const cart = {
    1:5,
    3:1,
    5: 2,
};
const items = Object.keys(cart).length;
console.log(items);
//will return the  number of items in the cart
cart[3]=cart[3]+1;
console.log(cart);
//will update the quantity of item with id 3 increased by 1
cart[3]=cart[3]-1;
console.log(cart);
//will update the quantity of item with id 3 decreased by 1 